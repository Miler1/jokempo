const moment = require('moment');
const MlpClass = require('../models/MlpDAO');

/**
 * Loading config mlp
 */
exports.list = function () {
    const Mlp = new MlpClass();
    return Mlp.list();
}