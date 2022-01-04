import { Column } from "react-table";

export type Data = {
	id: string;
	product_picture?: string;
	quantity: number;
	title: string;
};

export type Props = {
	columns: Column<Data>[];
	data: Data[]
};
