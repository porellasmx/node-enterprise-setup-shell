/*
  Express router for all the endpoints of your todo
*/

const express = require('express');
const router = express.Router();
const reportsController = require('../controllers/reportController');
const upload = require('../../api/middleware/file-uploader');

router.get('/reports', reportsController.getReports);
router.post(
  '/reports',
  upload.array('image', 1),
  reportsController.createReport
);

router.delete('/reports/:id', reportsController.deleteReport);

module.exports = router;
