const mongo = require('../../config/mongo');
const exCtrl = require('../../app/controllers/exampleController');

async function testExamplCtrl() {
    const mongoClient = await mongo.getConnection('moka_ca_test');
    let res = {
        locals: {
            mongoClient: mongoClient
        },
        send: send
    }
    exCtrl.action({ value: 'ok' }, res);
}

function send(data) {
    console.log(data);
}

testExamplCtrl();