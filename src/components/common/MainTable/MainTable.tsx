import {FC} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@mui/styles";
import { Theme } from "@material-ui/core";
import {
	Hooks, useSortBy, useTable
} from "react-table";
import { Button } from "@mui/material";

import { Props } from "./MainTable.types";


const useStyles = makeStyles((theme: Theme) => ({
	tableBody: {
		width: "100%",
		//display: "block",
		//overflow: "auto",
		//maxHeight: "70vh",
		//"&.MuiTableBody-root": {
		display: "block",

		"& .MuiTableCell-body": {
			width: "25%",
			color: theme.palette.primary.main,
		},

	},
	tableHead: {
		fontWeight: "bold",
		"& .MuiTableCell-head": {
			width: "25%",
			color: theme.palette.primary.main,
			fontSize: "18px",
		},


	},
	tableRow: {
		width: "100%",
		/*"&.MuiTableRow-root": {
			display: "flex",
			justifyContent: "space-between"
		}*/
	},
	tableRowEven: {
		width: "100%",
		backgroundColor: "rgba(255, 255, 255, 0.1)"
	},
	productTable: {
		color: theme.palette.primary.main,
		"& .MuiTableCell-root": {
			color: theme.palette.primary.main,
			width: "100%",
		},

	},
	tableCell: {
		color: theme.palette.primary.main,
		width: "100%",
		"& .MuiTableCell-root": {
			color: theme.palette.primary.main,
		},
	},
	productTitle: {
		textTransform: "uppercase"
	}
}));

export const MainTable: FC<Props> = ({ columns, data }) => {
	const classes = useStyles();

	const tableHooks = (hooks: Hooks) => {
		hooks.visibleColumns.push((columns) => [
			...columns,
			{
				id: "Edit",
				Header: "Edit",
				Cell: ({ row }) => (
					<Button
						onClick={()=> alert("Products quantity: " +
							row.values?.quantity)}
					>
						Edit
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

	const isEven = (idx:number) => idx % 2 === 0;

	return (
		<TableContainer>
			<Table
				aria-label="product table"
				// className={classes.productTable}
				{...getTableProps()}
			>
				<TableHead className={classes.tableHead}>
					{headerGroups.map((headerGroup) => {
                        const {key, ...restHeaderGroupProps} = headerGroup.getHeaderGroupProps();
                        return (
                            <TableRow
	key={key}
	{...restHeaderGroupProps}
                            >
                                {headerGroup.headers.map((column) => (
                                    <TableCell
	className={classes.tableCell}
	key={Math.random()*9999}
	{...column.getHeaderProps(column.getSortByToggleProps())}
                                    >
                                        {column.render("Header")}
                                        {/* Add a sort direction indicator */}
                                        <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? " 🔽"
                                                    : " 🔼"
                                                : ""}
                                        </span>
                                    </TableCell>
                                ))}
                            </TableRow>
                            );
                    } )}
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
