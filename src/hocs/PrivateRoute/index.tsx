import { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthorizationStatus } from "../../utils/const";
import { useAuth } from "contexts/AuthContext";
import { Loader } from "components/common/Loader/Loader";
import type { Props } from "./PrivateRoute.types";


const PrivateRoute: FC<Props> = ({
	component: Component,
	...rest
}) => {
	const authContext = useAuth();
	if( authContext === null ) {
		return null;
	}
	const { currentUser } = authContext;

	const authorizationStatus = useSelector(state => state.auth.authorizationStatus);

	const isUserLoggedOut = authorizationStatus === AuthorizationStatus.NO_AUTH && currentUser;

	console.log(
		"currentUser",
		currentUser
	);

	if (authorizationStatus === AuthorizationStatus.UNKNOWN) {
		return <Loader />;
	}

	if (isUserLoggedOut) {
		return (
			<Route
				{...rest}
				render={() => (
					<Redirect
						to={{
							pathname: "/login",
						}}
					/>
				)}
			/>
		);
	}

	return (
		<Route
			{...rest}
			render={(props) => (
				<Component {...props} />
			)}
		/>
	);
};

export default PrivateRoute;
