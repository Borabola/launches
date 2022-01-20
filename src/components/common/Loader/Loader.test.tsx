import { ThemeProvider } from "@mui/material/styles";
import { render, screen } from "@testing-library/react";
import { Loader } from ".";
import theme from "../../../theme";

describe(
	"Component: Loader",
	() => {
		it(
			"should render correctly",
			() => {
				render(<ThemeProvider theme={theme}>
                    <Loader />
           </ThemeProvider>);

				expect(screen.getByText(/Loading/i)).toBeInTheDocument();
			}
		);
	}
);
