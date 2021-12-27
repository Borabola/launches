// eslint-disable-next-line
const path = require("path");

const resolvePath = p => path.resolve(
	__dirname,
	p
);

module.exports = {
	webpack: {
		alias: {
			"components": resolvePath("./src/components"),
			"assets": resolvePath("./src/assets"),
			"services": resolvePath("./src/services"),
			"pages": resolvePath("./src/pages"),
			"context": resolvePath("./src/context"),
			"firebase": resolvePath("./src/firebase"),
			"hocs": resolvePath("./src/hocs"),
			"hooks": resolvePath("./src/hooks"),
			"layouts": resolvePath("./src/layouts"),
			"redux": resolvePath("./src/redux"),
			"utils": resolvePath("./src/utils"),
		}
	},
};