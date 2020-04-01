const moment = require('moment');
const HistoricoClass = require('../models/HistoricoDAO');

/**
 * Saving log
 */
exports.save = function (data) {
    data.when = {
        milli: moment().valueOf(),
        date: moment().toDate()
    };

    const Historico = new HistoricoClass();
    return Historico.insertOne(data);
}

exports.list = function () {
    const Historico = new HistoricoClass();
    return Historico.list();
}

exports.delete = function (id) {
    const Historico = new HistoricoClass();
    return Historico.deleteOne(id); 
}

exports.update = function (data) {
    const Historico = new HistoricoClass();
    return Historico.updateOne(data);
}