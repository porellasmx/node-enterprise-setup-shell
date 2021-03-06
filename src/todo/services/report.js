/* Todo Service */

const Report = require('../models/report');
class ReportService {
  static getReports() {
    return Report.find();
  }

  static getReport(req) {
    return Report.findById({ _id: req.params.id });
  }

  static createReport(req) {
    return new Report({
      address: req.body.address,
      placeName: req.body.placeName,
      description: req.body.description,
      abuseType: req.body.abuseType,
      dateOfEvent: req.body.dateOfEvent,
      timeOfEvent: req.body.timeOfEvent,
      lat: req.body.lat,
      long: req.body.long,
      zipcode: req.body.zipcode,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      image: req.file.originalname
    });
  }

  static deleteReport(req) {
    return Report.deleteOne({ _id: req.params.id });
  }
}

module.exports = ReportService;
