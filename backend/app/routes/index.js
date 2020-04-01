const router = require('express').Router();
const exCtrl = require('../controllers/exampleController');
const logCtrl = require('../controllers/logController');
const histCtrl = require('../controllers/historicoController');
const mlpCtrl = require('../controllers/mlpController');

router.get('/', (req, res) => {
    res.send({ message: 'Welcome to ... Example Micro Service' });
});

router.post('/api/example/action', exCtrl.action);
router.get('/api/log/list', logCtrl.list);
router.get('/api/mlp/list', mlpCtrl.list);
router.post('/api/mlp/predict', mlpCtrl.predict);
router.post('/api/mlp/shuffle', mlpCtrl.shuffle);
router.post('/api/mlp/fit', mlpCtrl.fit);
router.get('/api/historico/list', histCtrl.list);
router.post('/api/historico/save', histCtrl.save);
router.delete('/api/historico/delete/:deleteId', histCtrl.delete);
router.put('/api/historico/update/:updateId', histCtrl.update);

module.exports = router;