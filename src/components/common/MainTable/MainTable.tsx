import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FC } from "react";
import { useIntl } from "react-intl";
import {
	Hooks, useSortBy, useTable
} from "react-table";
import { useStyles } from "./MainTable.styles";
import { Data, Props } from "./MainTable.types";

type rowProps = {
	row: {
		values: {
			quantity: number
		}
	}
};

export const MainTable: FC<Props> = ({ columns, data }) => {
	const classes = useStyles();
	const intl = useIntl();

	const tableHooks = (hooks: Hooks<Data>) => {
		hooks.allColumns.push((columns) => [
			...columns,
			{
				id: "Edit",
				Header: "Edit",
				Cell: ({ row }: rowProps) => (
					<Button
						onClick={() => alert("Products quantity: " +
							row.values?.quantity)}
					>
						{intl.formatMessage({ id: "edit" })}
					</Button>
				)
			}
		]);
	};

	const { getTableProps, headerGroups, rows, prepareRow } = useTable(
		{
			columns,
			data
		},
		tableHooks,
		useSortBy
	);

	const isEven = (idx: number) => idx % 2 === 0;

	return (
		<TableContainer>
			<Table
				aria-label="product table"
				{...getTableProps()}
			>
				<TableHead className={classes.tableHead}>
					{headerGroups.map((headerGroup) => {
						const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
						return (
							<TableRow
								key={key}
								{...restHeaderGroupProps}
							>
								{headerGroup.headers.map((column) => {
									const { key, ...restColumn } =
										column.getHeaderProps(column.getSortByToggleProps());
									return (
										<TableCell
											className={classes.tableCell}
											key={key}
											//{...restColumn(column.getSortByToggleProps())}
											{...restColumn}
										>
											{column.render("Header")}
											{/* Add a sort direction indicator */}
											<span>
												{/*column.isSortedDesc
													? " 🔽"
													: " 🔼"
												*/}
												{column.isSorted
													? column.isSortedDesc
														? " 🔽"
														: " 🔼"
													: ""}
											</span>
										</TableCell>
									);
								})}
							</TableRow>
						);
					})}
				</TableHead>
				<TableBody className={classes.tableBody}>
					{rows.map((
						row, idx
					) => {
						prepareRow(row);
						const { key, ...restRowProps } = row.getRowProps();
						return (
							<TableRow
								className={isEven(idx) ? classes.tableRowEven : classes.tableRow}
								key={key}
								{...restRowProps}
							>
								{row.cells.map((cell) => {
									const { key, ...restCellProps } = cell.getCellProps();
									return (
										<TableCell
											className={classes.tableCell}
											key={key}
											{...restCellProps}
										>
											{cell.render("Cell")}
										</TableCell>
									);
								})}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
