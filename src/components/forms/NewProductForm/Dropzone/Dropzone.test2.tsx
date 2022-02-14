import { Form, Formik } from "formik";
import { Dropzone } from ".";
import {
	dispatchEvt, flushPromises, renderWithProvidersLogin
} from "../../../../utils/testHelper";

const mockSubmit = jest.fn();

const mockData = (files: File[]) => {
	return {
		dataTransfer: {
			files,
			items: files.map(file => ({
				kind: "file",
				type: file.type,
				getAsFile: () => file
			})),
			types: ["Files"]
		}
	};
};
let data: ReturnType<typeof mockData>;

describe(
	"Component: Dropzone ",
	() => {
		beforeAll(() => {
			const fieldMock = {};
			const metaMock = {};
			const file = new File(
				["dummy content"],
				"exampleFile.jpg",
				{
					type: "image/jpg",
				}
			);
			const helperMock = [new File(
				["dummy content"],
				"exampleFile.jpg",
				{
					type: "image/jpg",
				}
			)];

			jest.mock(
				"formik",
				() => ({
					...jest.requireActual("formik"),
					useField: jest.fn(() => {
						return [fieldMock, metaMock, helperMock];
					}),
				})
			);
			data = mockData([file]);
		});

		it(
			"should render correctly with received data",
			async () => {

				//const onDragEnter = jest.fn();
				//const onDrop = jest.fn();

				const { getByText, findByText, rerender }
					= renderWithProvidersLogin(<Formik
						initialValues={{}}
						onSubmit={mockSubmit}
					>
						<Form>
							<Dropzone name="file" />
						</Form>
					</Formik>);
				const fileDropzone = getByText("Drag drop image file here, or click to select it");

				dispatchEvt(
					fileDropzone,
					"dragenter",
					data
				);
				await flushPromises(
					rerender,
					<Dropzone name="file" />
				);

				expect(findByText(/exampleFile/i)).toBeInTheDocument();
				//expect(onDrop).toHaveBeenCalled();
			}
		);
	}
);
