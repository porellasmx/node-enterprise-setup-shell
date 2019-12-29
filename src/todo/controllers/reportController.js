/* Report Controller */
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
  },

  getReport: async (req, res, next) => {
    try {
      const report = await reportService.getReport(req);
      if (report) {
        res.status(200).json(report);
      } else {
        res.status(404).json({ message: 'Post not found!' });
      }
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      return err;
    }
  },

  createReport: async (req, res, next) => {
    try {
      const report = reportService.createReport(req);
      const createdReport = await report.save();
      return res.status(201).json({
        message: 'Report added successfully',
        report: {
          ...createdReport._doc
        },
        status: 201
      });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      return err;
    }
  },

  deleteReport: async (req, res, next) => {
    try {
      const report = await reportService.deleteReport(req);
      if (report.n > 0) {
        return res.status(200).json({ message: 'Deletion successful!' });
      } else {
        return res.status(401).json({ message: 'Not authorized!' });
      }
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      return err;
    }
  }
};
