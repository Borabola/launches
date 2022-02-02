import { screen } from "@testing-library/react";
import { FC, useMemo } from "react";
import { Column } from "react-table";
import { MainTable } from ".";
import type { Data } from "../../../components/common/MainTable/MainTable.types";
import { renderWithProvidersLogin } from "../../../utils/testHelper";

const FakeComponent: FC = () => {
	const columns = useMemo<Column<Data>[]>(
		() => ([
			{
				Header: "id",
				accessor: "id"
			},
			{
				Header: "title",
				accessor: "title"
			},
			{
				Header: "quantity",
				accessor: "quantity"
			},
			{
				Header: "picture",
				accessor: d => (d.product_picture ? <img
					src={d.product_picture}
					width={200}
					height={200}
					alt={d.title}
				/> : "N/A"),
			}
		]),
		[]
	);
	const testData = [
		{
			"id": "testId",
			"title": "testTitle",
			"quantity": 3,
			"product_picture": "testPictureURL",
		}
	];
	return (
		<MainTable
			columns={columns}
			data={testData}
		/>
	);
};

describe(
	"Component: MainTable",
	() => {
		it(
			"should render correctly with registered user",
			() => {
				renderWithProvidersLogin(<FakeComponent />);

				const displayedImage = document.querySelector("img") as HTMLImageElement;

				expect(screen.getByText(/testId/i)).toBeInTheDocument();
				expect(screen.getByText(/testTitle/i)).toBeInTheDocument();
				expect(screen.getByAltText(/testTitle/i)).toBeInTheDocument();
				expect(displayedImage.src).toContain("testPictureURL");
			}
		);
	}
);
