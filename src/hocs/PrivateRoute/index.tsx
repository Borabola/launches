import { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import { Loader } from "../../components/common/Loader";
import { useAuth } from "../../contexts/AuthContext";
import { useTypedSelector } from "../../redux/store";
import { ModifiedRouteItem } from "../../routes/commonRoutes";
import { AuthorizationStatus } from "../../utils/const";

type Props = ModifiedRouteItem;

const PrivateRoute: FC<Props> = ({
	component: Component,
	...rest
}) => {
	const authContext = useAuth();
	if (authContext === null) {
		return null;
	}

	const authorizationStatus = useTypedSelector(state => state.auth.authorizationStatus);

	const isUserLoggedOut = !!(authorizationStatus === AuthorizationStatus.NO_AUTH);

	if (authorizationStatus === AuthorizationStatus.UNKNOWN) {
		return <Loader />;
	}

	if (isUserLoggedOut) {
		return (
			<Route
				{...rest}
				render={({ location }) => (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location }
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
