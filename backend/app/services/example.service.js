const logSrv = require('./log.service');

/**
 * main service method do process action
 */
exports.runAction = async function (data) {
    const resp = await asyncAction(data);
    return resp;
}

/**
 * Running action to process data async
 * @param {*} data 
 */
async function asyncAction(data) {
    return logSrv.save({ message: 'Saving example data', data });
}