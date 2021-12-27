import { FC } from "react";
import { IntlProvider } from "react-intl";
import messages_en from "../../i18n/en.json";
import { messageObj, LangEnum } from "./AppIntlProvider.types";

const AppIntlProvider: FC = ({
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

export default AppIntlProvider;
