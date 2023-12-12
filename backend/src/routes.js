const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router(); // Pegando o roteador do express
const upload = multer(uploadConfig);

// Existem 4 métodos que podem ser executados: GET, POST, PUT, DELETE
// GET: Pega informação no backend
// POST: Cria informação no backend
// PUT: Edita informação no backend
// DELETE: Deleta informação no backend

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store);

// É preciso exportar as rotas para o app usar
module.exports = routes;