class MlpDAO {

	constructor(){
        this.fs = require('fs');
        this.collection = "config_mlp.json";
    }
    
    list() {
        console.log('Reading');
        return new Promise((resolve, reject) => {
            this.fs.readFile(this.collection, 'utf8', (err, resp) => {
                if (err) {
                    reject(err);
                } else {
                    console.log("MlpDAO:"+resp)
                    // vai para o controller
                    resolve(resp);
                }
            });
        });
    }
}

module.exports = MlpDAO;