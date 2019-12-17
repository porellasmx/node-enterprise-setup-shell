const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const config = require('../../config/index');

aws.config.update({
  secretAccessKey: config().aws.secretAccessKey,
  accessKeyId: config().aws.accessKeyId,
  region: 'us-east-1'
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false);
  }
};

const upload = multer({
  storage: multerS3({
    acl: 'public-read',
    s3,
    bucket: 'porellas',
    key: (req, file, cb) => {
      req.file = file;
      cb(null, Date.now() + file.originalname);
    }
  })
});

module.exports = upload;
