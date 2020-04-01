const moment = require('moment');
const LogClass = require('../models/LogDAO');

/**
 * Saving log
 */
exports.save = function (data) {
    data.when = {
        milli: moment().valueOf(),
        date: moment().toDate()
    };

    const Log = new LogClass();
    return Log.insertOne(data);
}

exports.list = function () {
    const Log = new LogClass();
    return Log.list();
}