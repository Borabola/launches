
import "firebase/auth";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut
} from "firebase/auth";
import {
	createContext,
	FC,
	useContext,
	useEffect,
	useState
} from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { stateType } from "../components/forms/LoginForm/LoginForm.types";
import { auth } from "../firebase/firebaseConfig";
import { requireAuthorization } from "../redux/auth/sliceReducer";
import { AppRouteEnum, AuthorizationStatusEnum } from "../types/Enums";
import {
	outputtingError,
	outputtingGoogleError
} from "../utils/toastHelper";
import {
	AuthValues, CurrentUser, FirebaseError, Props, SProps
} from "./AuthContext.types";

export const AuthContext = createContext<AuthValues | null>(null);

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider: FC = ({ children }: Props) => {
	const intl = useIntl();
	const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(
		() => {
			let newUser;
			setIsLoading(true);
			const unsubsribe = onAuthStateChanged(
				auth,
				(user) => {
					if (user && user.email && user.uid) {
						newUser = {
							email: user.email,
							userId: user.uid
						};
						setCurrentUser(newUser);
						dispatch(requireAuthorization(AuthorizationStatusEnum.AUTH));
					} else {
						if (currentUser !== null) {
							setCurrentUser(null);
						}

						dispatch(requireAuthorization(AuthorizationStatusEnum.NO_AUTH));
					}
					setIsLoading(false);
				}
			);
			return unsubsribe;
		},
		[]
	);

	const signup = async ({
		email, password
	}: SProps) => {
		try {
			await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			history.push(AppRouteEnum.LOGIN);

		} catch (error) {
			outputtingError(
				(error as FirebaseError).code,
				intl
			);
		}
	};

	const login = async (
		{ email, password }: SProps, { from }: stateType
	) => {
		try {
			const result = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const newUser = {
				email: result.user.email,
				userId: result.user.uid
			};
			setCurrentUser(newUser);
			dispatch(requireAuthorization(AuthorizationStatusEnum.AUTH));
			history.replace(from);

		} catch (error) {
			outputtingError(
				(error as FirebaseError).code,
				intl
			);
		}
	};

	const logout = async () => {
		return signOut(auth).then(() => {
			dispatch(requireAuthorization(AuthorizationStatusEnum.NO_AUTH));
		});
	};

	const googlePopupSignIn = async ({ from }: stateType) => {
		const provider = new GoogleAuthProvider();
		try {
			const result = await signInWithPopup(
				auth,
				provider
			);
			const newUser = {
				email: result.user.email,
				userId: result.user.uid
			};
			setCurrentUser(newUser);
			dispatch(requireAuthorization(AuthorizationStatusEnum.AUTH));
			history.replace(from);
		} catch (error) {
			outputtingGoogleError(
				(error as FirebaseError).code,
				intl
			);
		}
	};

	const value = {
		currentUser,
		login,
		signup,
		logout,
		googlePopupSignIn
	};

	return (
		<AuthContext.Provider value={value}>
			{!isLoading && children}
		</AuthContext.Provider>
	);
};
