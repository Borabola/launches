import { render, screen } from "@testing-library/react";
import { FC } from "react";
import { IntlProvider, useIntl } from "react-intl";
import messages_en from "../../i18n/en.json";
import { LangEnum, messageObj } from "./AppIntlProvider.types";

const testMessageId = "picture";

export const FakeIntlProvider: FC = ({
	children
}) => {
	// dictionary keys with translation
	const messages: messageObj = {
		[LangEnum.En]: messages_en
	};

	return (
		<IntlProvider
			locale={LangEnum.En}
			messages={messages[LangEnum.En]}
		>
			{children}
		</IntlProvider>
	);
};

const FakeComponent: FC = () => {
	const intl = useIntl();

	return (
		<p>{intl.formatMessage({ id: testMessageId })}</p>

	);
};

describe(
	"IntlProvider tests",
	() => {
		it(
			"should render correct text",
			() => {
				render(<FakeIntlProvider>
					<FakeComponent />
				</FakeIntlProvider>);

				const testText = messages_en[testMessageId] as string;
				console.log(testText);

				expect(screen.getByText(testText)).toBeInTheDocument();
			}
		);
	}
);
