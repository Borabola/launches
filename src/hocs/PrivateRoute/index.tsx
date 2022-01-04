import { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { useTypedSelector } from "../../redux/store";
import { AuthorizationStatus } from "../../utils/const";
import { useAuth } from "../../contexts/AuthContext";
import { Loader } from "../../components/common/Loader/Loader";
import { ModifiedRouteItem } from "../../routes/commonRoutes";

type Props = ModifiedRouteItem;

const PrivateRoute: FC<Props> = ({
	component: Component,
	...rest
}) => {
	const authContext = useAuth();
	if (authContext === null) {
		return null;
	}
	const { currentUser } = authContext;

	const authorizationStatus = useTypedSelector(state => state.auth.authorizationStatus);

	const isUserLoggedOut = authorizationStatus === AuthorizationStatus.NO_AUTH && currentUser;

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
