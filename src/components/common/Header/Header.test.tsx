import { screen } from "@testing-library/react";
import { Header } from ".";
import { renderWithProvidersLogin, renderWithProvidersLogout } from "../../../utils/testHelper";

describe(
	"Component: Header",
	() => {
		it(
			"should render correctly with registered user",
			() => {
				renderWithProvidersLogin(<Header isMain={false} />);

				expect(screen.getByText(/logout/i)).toBeInTheDocument();
				expect(screen.getByText(/login/i)).toBeInTheDocument();
			}
		);
		it(
			"should render UserMenu with registered user",
			() => {
				renderWithProvidersLogin(<Header isMain={false} />);

				expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
				expect(screen.getByText(/Add New Product/i)).toBeInTheDocument();
			}
		);
		it(
			"should render correctly without user",
			() => {
				renderWithProvidersLogout(<Header isMain={false} />);

				const logoutButton = screen.queryByText(/logout/i);

				expect(logoutButton).toBeNull();
				expect(screen.getByText(/login/i)).toBeInTheDocument();
			}
		);
		it(
			"should NOT render UserMenu without user",
			() => {
				renderWithProvidersLogout(<Header isMain={false} />);

				const dashboardMenu = screen.queryByText(/Dashboard/i);
				const addNewProductMenu = screen.queryByText(/Add New Product/i);

				expect(dashboardMenu).toBeNull();
				expect(addNewProductMenu).toBeNull();
			}
		);
	}
);
