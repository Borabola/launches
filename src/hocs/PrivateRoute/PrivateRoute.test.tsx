import { screen } from "@testing-library/react";
import { FC } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from ".";
import { renderWithAuth, renderWithUnknown } from "../../utils/testHelper";

const PrivateComponent: FC = () => {
	return (
		<span>Private!</span>
	);
};
const PublicComponent: FC = () => {
	return (
		<span>Redirected!</span>
	);
};
const privateRoutes = [
	{
		component: PrivateComponent,
		path: "/Private",
		exact: true,
		isAuth: true
	}
];

const commonRoutes = [
	{
		component: PublicComponent,
		path: "/Common",
		exact: true,
		isAuth: false
	}];

describe(
	"Component: PrivateRoute ",
	() => {
		it(
			"Private component for authenticated users",
			() => {
				renderWithAuth(<Switch>
					{[
						...privateRoutes,
						...commonRoutes,
					].map((
						route, index
					) => {
						if (route.isAuth) {
							return <PrivateRoute
								{...route}
								key={`r_${index}_${route.path}`}
							/>;
						}

						return <Route
							{...route}
							key={`r_${index}_${route.path}`}
						/>;
					})}
                   </Switch>);

				expect(screen.queryByText(/Redirected/i)).not.toBeInTheDocument();
				expect(screen.queryByText("Private!")).toBeInTheDocument();
			}
		);

		it(
			"Private component for unauthenticated users",
			() => {
				renderWithUnknown(<Switch>
					{[
						...privateRoutes,
						...commonRoutes,
					].map((
						route, index
					) => {
						if (route.isAuth) {
							return <PrivateRoute
								{...route}
								key={`r_${index}_${route.path}`}
							/>;
						}

						return <Route
							{...route}
							key={`r_${index}_${route.path}`}
						/>;
					})}
                      </Switch>);

				expect(screen.queryByText(/Redirected/i)).toBeInTheDocument();
				expect(screen.queryByText("Private!")).not.toBeInTheDocument();
			}
		);
	}
);
