/* eslint-disable no-unused-vars */
import { FC } from "react";
import { useMemo } from "react";
import {
	Box,
	Container,
} from "@material-ui/core";
import Table from "@mui/material/Table";
//import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { PageLayout } from "layouts/PageLayout";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { database } from "firebase/firebaseConfig";
import { useIntl } from "react-intl";
import { useAuth } from "contexts/AuthContext";
import { useTable } from "react-table";
import { useProducts } from "../../hooks/useProduct";
import { MainTable } from "components/common/MainTable";


const useStyles = makeStyles(() => ({
	tableImg: {
		position: "relative",
		maxWidth: "250px",
		height: "auto",
		maxHeight: "250px",
		overflow: "hidden",
		"&::after": {
			position: "absolute",
			content: "ghghghg",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			bacgroundColor: "rgba(255, 0, 0, 0, 0.3)",
		}

	},
}));

const Dashboard: FC = () => {
	const intl = useIntl();
	const classes = useStyles();

	const authContext = useAuth();
	if( authContext === null ) {
		return null;
	}
	const { currentUserId } = authContext;


	const products = useProducts(
		currentUserId,
		database
	);

	const productData = useMemo(
		//() => [...products],
		() => 
			products ? Object.values(products): [],
		[products]
	);

	const columns = useMemo(
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
				accessor: d => ( d.product_picture ? <img 
					className={classes.tableImg}
					src={d.product_picture}
					width={200}
					height={200}
					alt={d.title}
				/> : "N/A" ),
			},
		]),
		[]
	);

	
	
	console.log(columns);

	return (
		<PageLayout>
			<Box
				display={"flex"}
				flexDirection={"column"}
				//height="100vh"
				justifyContent="center"
			>
				<Container maxWidth="lg" >
					<Typography
						variant="h2"
						mb="30px"
					>{intl.formatMessage({ id: "productList" })}
					</Typography>
					
					<MainTable 
						columns={columns}
						data={productData}
					/>
				</Container>
			</Box>
		</PageLayout>
	);
};

export default Dashboard;
