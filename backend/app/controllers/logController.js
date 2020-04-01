const logService = require('../services/log.service');

/**
 * Controller action to handles request and manages action instruction structure
 */
exports.list = async function (req, res) {
    let resp = await logService.list();

    if (resp.error) {
        res.status(500).json(resp);
    } else {
        let respData = {
            log: resp,
            status: 0
        };
        res.send(respData);
    }
}