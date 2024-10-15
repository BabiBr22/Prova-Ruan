const express = require('express');
const vagaController = require('../controllers/vagaController');

const router = express.Router();

router.post('/vagas', vagaController.createVaga);
router.get('/vagas', vagaController.getVagas);
router.get('/vagas/:id', vagaController.getVagaById);
router.put('/vagas/:id', vagaController.updateVaga);
router.delete('/vagas/:id', vagaController.deleteVaga);
router.get('/cargo/:cargo', vagaController.getVagasByCargo);
router.get('/localizacao/:cidade', vagaController.getVagasByCidade);

module.exports = router;
