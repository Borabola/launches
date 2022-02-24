import { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import { Loader } from "../../components/common/Loader";
import { useAuth } from "../../contexts/AuthContext";
import { useTypedSelector } from "../../redux/store";
import type { PrivatRoutesItem } from "../../routes/routes.types";
import { AuthorizationStatusEnum } from "../../types/Enums";

const PrivateRoute: FC<PrivatRoutesItem> = ({
	component: Component,
	...rest
}) => {
	const authContext = useAuth();

	if (authContext === null) {
		return null;
	}

	const authorizationStatus = useTypedSelector(state => state.auth.authorizationStatus);

	const isUserLoggedOut = !!(authorizationStatus === AuthorizationStatusEnum.NO_AUTH
		|| (authContext.currentUser === null));

	if (authorizationStatus === AuthorizationStatusEnum.UNKNOWN) {
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
