import { createEvent, fireEvent } from "@testing-library/react";
import {
	Form, Formik, FormikHelpers
} from "formik";
import { Dropzone } from ".";
import { flushPromises, renderWithProvidersLogin } from "../../../../utils/testHelper";

const fieldMock = {};
const metaMock = {};
const helperMock = () => jest.fn(); //FieldHelperProps<any>;
/*const mockInitialData = {
	id: 33,
	productName: "test product name",
	productQnt: 10,
	file: null
};*/
const mockSubmit = (
	values: {}, formikHelpers: FormikHelpers<{}>
) => jest.fn();

jest.mock(
	"formik",
	() => ({
		...jest.requireActual("formik"),
		useField: jest.fn(() => {
			return [fieldMock, metaMock, helperMock];
		}),
	})
);

describe(
	"Component: Dropzone ",
	() => {
		it(
			"should render correctly with received data",
			async () => {

				const file = new File(
					["dummy content"],
					"exampleFile.jpg",
					{
						type: "image/jpg",
					}
				);
				//const onDragEnter = jest.fn();
				//const { container, getByText, rerender }
				const { getByText, findByText, rerender }
					= renderWithProvidersLogin(<Formik
						initialValues={{}}
						onSubmit={mockSubmit}
					>
						<Form>
							<Dropzone name="file" />
						</Form>
					</Formik>);
				//const dropzone = container.querySelector("div");
				const fileDropzone = getByText("Drag drop image file here, or click to select it");
				const fileDropEvent = createEvent.drop(fileDropzone);

				/*dispatchEvt(
					dropzone,
					"dragenter",
					file
				);
				await flushPromises(
					rerender,
					<Dropzone name="file" />
				);*/

				Object.defineProperty(
					fileDropEvent,
					"dataTransfer",
					{
						value: {
							files: [file],
						},
					}
				);

				fireEvent(
					fileDropzone,
					fileDropEvent
				);
				await flushPromises(
					rerender,
					<Dropzone name="file" />
				);

				expect(findByText(/exampleFile/i)).toBeInTheDocument();
			}
		);
	}
);
