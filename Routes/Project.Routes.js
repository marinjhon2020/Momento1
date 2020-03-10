import express from 'express';
import router from '../Controllers/ProjectController';
let router = express.Router();
router.get('/home', controller.home)
router.get('/cesde', controller.cesde)
router.get('/data', controller.data)
router.get('/productos', controller.productos)
router.get('/usuarios', controller.usuarios)
module.exports = router;