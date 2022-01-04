import { Container, Typography } from "@mui/material";
import { FC } from "react";
import { PageLayout } from "../../layouts/PageLayout";

const RockedPage: FC = () => {

	return (
		<PageLayout>
			<Container maxWidth="lg">
				<Typography>Rocket</Typography>

			</Container>
		</PageLayout>
	);
};

export default RockedPage;
