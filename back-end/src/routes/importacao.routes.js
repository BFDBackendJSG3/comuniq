const { Router } = require('express');
const ImportacaoController = require('../controllers/ImportacaoController');

const router = Router();

router.post('/importar-noticia', ImportacaoController.importar);

module.exports = router;