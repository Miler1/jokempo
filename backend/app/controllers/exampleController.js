const exampleService = require('../services/example.service');

/**
 * Controller action to handles request and manages action instruction structure
 */
exports.action = async function (req, res) {
    let body = req.body;
    let resp = await exampleService.runAction(body);

    if (resp.error) {
        res.status(500).json(resp);
    } else {
        let respData = {
            message: 'Action executed with success',
            status: 0
        };
        res.send(respData);
    }
}