/* Report Controller */
const Report = require('../models/report');
const reportService = require('../services/report');

module.exports = {
  getReports: async (req, res, next) => {
    try {
      const reports = await reportService.getReports();
      return res.status(200).json({
        message: 'Reports fetched successfully',
        reports: reports,
        status: 200
      });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      return err;
    }
  }
};
