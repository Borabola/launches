import { IntlShape } from "react-intl";
import * as Yup from "yup";

export const validationSchema = (intl: IntlShape) => Yup.object().shape({
	productName: Yup.string().min(2).max(255)
		.required(`${intl.formatMessage({ id: "productNameIsRequired" })}`),
	file: Yup.mixed()
		.nullable()
		.notRequired(),
	productQnt: Yup.number().min(0)
});
