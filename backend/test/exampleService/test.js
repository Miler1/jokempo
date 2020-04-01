
const exampleService = require('../../app/services/example.service');

async function testExampleService() {
    let resp = await exampleService.runAction({ name: 'test', value: 'ok' });

    console.log('Resp: ', resp);
}

testExampleService();