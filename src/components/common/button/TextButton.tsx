import { Button } from "@mui/material";
import { FC } from "react";
import { Props } from "./TextButton.types";

export const TextButton: FC<Props> = ({ btnText, onBtnClick }) => {
	return (
		<Button
			variant="text"
			onClick={onBtnClick}
		>
			{btnText}
		</Button>
	);
};
