class LogDAO {
    constructor() {
        this.fs = require('fs');
        this.collection = "example_log.json"
    }

    insertOne(log) {
        console.log('Inserting');
        return new Promise((resolve, reject) => {
            this.fs.appendFile(this.collection, JSON.stringify(log), (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            });
        });
    }
    list() {
        console.log('Reading');
        return new Promise((resolve, reject) => {
            this.fs.readFile(this.collection, 'utf8', (err, resp) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(resp);
                }
            });
        });
    }
}

module.exports = LogDAO;