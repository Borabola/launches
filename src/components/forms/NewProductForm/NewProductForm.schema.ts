import * as Yup from "yup";

export const validationSchema = () => Yup.object().shape({
    productName: Yup.string().min(2).max(255).required("Product name is required"),
    file: Yup.mixed()
        .nullable()
        .notRequired(),
    productQnt: Yup.number().min(0)
});
