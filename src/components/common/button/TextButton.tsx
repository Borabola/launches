import { FC } from "react";
import { Button } from "@mui/material";
import { Props } from "./TextButton.types";

const TextButton: FC<Props> = ({ btnText, onBtnClick }) => {
	return (
		<Button
			variant="text"
			onClick={onBtnClick}
		>
			{btnText}
		</Button>
	);
};

export default TextButton;
