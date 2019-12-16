/*
  Express routes for each domain in one file
*/

const express = require('express');
const isAuth = require('./middleware/checkAuth');
const reportsAPI = require('../todo/routes/reports');

const apiRoutes = () => {
  const router = express.Router();
  //Router level middleware router.use
  router.use(isAuth);
  router.use(reportsAPI);

  return router;
};

module.exports = apiRoutes;
