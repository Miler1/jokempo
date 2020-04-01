const histService = require('../services/historico.service');
const ObjectID = require('mongodb').ObjectID;

/**
 * Controller action to handles request and manages action instruction structure
 */
exports.list = async function (req, res) {
    let resp = await histService.list();
    // var obj = JSON.parse(resp.replace(/\r?\n|\r/g, ''));

    if (resp.error) {
        res.status(500).json(resp);
    } else {
        let respData = {
            historico_list: resp,
            status: 0
        };
        res.send(respData);
    }
}

exports.save = async function (req, res) {
    var objectId = new ObjectID();
    
    // let id = objectId;
    let nome = req.body.nome;
    let placar = req.body.placar;
    let date = req.body.data;
    let partida = req.body.partida;
    let favorito = req.body.favorito;

    let data = { nome, placar, date, partida, favorito };

    let resp = await histService.save(data);
    res.status(201).json('CREATED!');
}

exports.delete = async function (req, res) {
    let id = req.params.deleteId;
    let resp = await histService.delete(id);
    res.status(200).json('DELETED!');
}

exports.update = async function (req, res) {
    let id = req.body._id;
    // let nome = req.body.nome;
    // let placar = req.body.placar;
    // let date = req.body.data;
    // let partida = req.body.partida;
    let favorito = true;

    let data = { id, favorito };

    let resp = await histService.update(data);
    res.status(200).json('UPDATE!');
}