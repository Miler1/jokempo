const mongodb = require('mongodb');
const getDb = require('./../../config/database').getDb;

class HistoricoDAO {
    constructor(nome, placar, date, partida, favorito) {
        this.nome = nome;
        this.placar = placar;
        this.data = date;
        this.partida = partida;
        this.favorito = favorito;
    }

    insertOne(hist) {
        const db = getDb();
        let dbOp;
        dbOp = db.collection('historicos').insertOne(hist);
        return dbOp
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    list() {
        const db = getDb();
            return db
            .collection('historicos')
            .find()
            .toArray()
            .then(products => {
                console.log(products);
                return products;
            })
            .catch(err => {
                console.log(err);
            });
    }

    deleteOne(histId) {
        console.log('id',histId.toString());
        const db = getDb();
        return db
        .collection('historicos')
        .deleteOne({ _id: new mongodb.ObjectId(histId) })
        .then(result => {
            console.log('Deleted');
        })
        .catch(err => {
            console.log(err);
      });
    }

    updateOne(hist) {
        const db = getDb();
        let dbOp;
        console.log(hist);
        if (hist.id) {
        // Update the product
        dbOp = db
            .collection('historicos')
            .updateOne({ _id: new mongodb.ObjectId(hist.id) }, { $set: { favorito: hist.favorito } });
        } 
        return dbOp
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = HistoricoDAO;