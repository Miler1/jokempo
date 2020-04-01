/**
 * Load environment variables
 */
require('dotenv').load();

const mongoConnect = require('./config/database').mongoConnect;// Load queries & mutations

/**
 * load app configs
 */
const app = require('./config/server');

mongoConnect(() => {
    app.listen(process.env.PORT || 8080, () => {
        console.log("Server ON " + (process.env.PORT || 8080));
    });
});



