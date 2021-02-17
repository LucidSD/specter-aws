const logger = require('./utils/loggerHelpers');

const startServer = async () => {

	try {
		await require('./app').run();
	} catch (err) {

		logger.error(err);
		process.exit(1);
	}
};

startServer();