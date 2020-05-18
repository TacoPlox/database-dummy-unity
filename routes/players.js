const express = require('express');
let router = express.Router();
let controller = require('./../controllers/players');

//Configurar rutas
// router.get('/list', function() {
//     //se permite "this"
// });
router.get('/', controller.list);
router.get('/list', controller.list);

//Exportar
module.exports = router;