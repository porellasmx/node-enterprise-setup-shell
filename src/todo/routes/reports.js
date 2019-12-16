/*
  Express router for all the endpoints of your todo
*/

const express = require('express');
const router = express.Router();
const reportsController = require('../controllers/todoController');

router.get('/reports', reportsController.getReports);

module.exports = router;
