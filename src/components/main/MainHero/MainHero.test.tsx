import { screen } from "@testing-library/react";
import { MainHero } from ".";
import { renderWithProvidersLogin } from "../../../utils/testHelper";

describe(
    "Component: MainHero",
    () => {
        it(
            "should render correctly with registered user",
            () => {
                renderWithProvidersLogin(<MainHero />);

                expect(screen.getByText(/Upcoming spaceflight launches/i)).toBeInTheDocument();
                expect(screen.getByText(/View all launches available/i))
                    .toBeInTheDocument();
                expect(screen.getByText(/Show all launches/i)).toBeInTheDocument();
            }
        );

    }
);
