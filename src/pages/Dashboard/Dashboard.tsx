import { FC, useMemo } from "react";
import { useIntl } from "react-intl";
import { Column } from "react-table";
import { MainTable } from "../../components/common/MainTable";
import type { Data } from "../../components/common/MainTable/MainTable.types";
import { useAuth } from "../../contexts/AuthContext";
import { database } from "../../firebase/firebaseConfig";
import useProducts from "../../hooks/useProducts";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import { useStyles } from "./Dashboard.styles";
import { AuthCurrentUser } from "./Dashboard.types";

export const Dashboard: FC = () => {
	const intl = useIntl();
	const classes = useStyles();

	const authContext = useAuth();
	if (authContext === null) {
		return null;
	}
	const { currentUser } = authContext as AuthCurrentUser;

	const products = useProducts(
		currentUser.userId,
		database
	);

	const productData = useMemo<Data[]>(
		() =>
			products ? Object.values(products) : [],
		[products]
	);

	const columns = useMemo<Column<Data>[]>(
		() => ([
			{
				Header: intl.formatMessage({ id: "productId" }),
				accessor: "id",
				isSorted: true
			},
			{
				Header: intl.formatMessage({ id: "title" }),
				accessor: "title",
				isSorted: true
			},
			{
				Header: intl.formatMessage({ id: "quantity" }),
				accessor: "quantity",
				isSorted: true
			},
			{
				Header: intl.formatMessage({ id: "picture" }),
				accessor: d => (d.product_picture ? <img
					className={classes.tableImg}
					src={d.product_picture}
					width={200}
					height={200}
					alt={d.title}
				/> : "N/A"),
				isSorted: true
			},
		]),
		[intl]
	);

	return (
		<DashboardLayout >
			<MainTable
				columns={columns}
				data={productData}
			/>
		</DashboardLayout>
	);
};
