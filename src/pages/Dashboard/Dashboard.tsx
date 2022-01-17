import { FC, useMemo } from "react";
import { useIntl } from "react-intl";
import { Column } from "react-table";
import { MainTable } from "../../components/common/MainTable";
import type { Data } from "../../components/common/MainTable/MainTable.types";
import { useAuth } from "../../contexts/AuthContext";

import { database } from "../../firebase/firebaseConfig";
import useProducts from "../../hooks/useProduct";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import { IAuthCurrentUserId } from "./Dashboard.types";
import { useStyles } from "./Dashboard.styles";

export const Dashboard: FC = () => {
	const intl = useIntl();
	const classes = useStyles();

	const authContext = useAuth();
	if (authContext === null) {
		return null;
	}
	const { currentUserId } = authContext as IAuthCurrentUserId;

	const products = useProducts(
		currentUserId,
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
				accessor: "id"
			},
			{
				Header: intl.formatMessage({ id: "title" }),
				accessor: "title"
			},
			{
				Header: intl.formatMessage({ id: "quantity" }),
				accessor: "quantity"
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
