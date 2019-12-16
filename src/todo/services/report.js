/* Todo Service */

const Report = require('../models/report');
class ReportService {
  static getReports() {
    return Report.find();
  }
}

module.exports = ReportService;
