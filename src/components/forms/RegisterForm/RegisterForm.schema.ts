import { IntlShape } from "react-intl";
import * as Yup from "yup";

export const validationSchema = (intl: IntlShape) =>
	Yup.object().shape({
		email: Yup.string()
			.email(`${intl.formatMessage({ id: "mustBeValidEmail" })}`)
			.max(255).required(`${intl.formatMessage({ id: "emailIsRequired" })}`),
		password: Yup.string().max(255)
			.required(`${intl.formatMessage({ id: "passwordIsRequired" })}`)
	});
