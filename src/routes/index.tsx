import { FC, Suspense} from "react";
import {
	Switch, Route, RouteProps 
} from "react-router-dom";
import { Loader } from "../components/common/Loader/Loader";
import { Box } from "@material-ui/core";
import { commonRoutes } from "./commonRoutes";
import { privateRoutes } from "./privateRoutes";


const Routes:FC = () => {
	return (
		<Suspense
			fallback={
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					height={"100vh"}
				>
					<Loader />
				</Box>
			}
		>
			<Switch>
				{[
					...privateRoutes,
					...commonRoutes,
				].map((
					route: FC, index: string
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
			</Switch>
		</Suspense>
	);
};

export default Routes;
