const dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const config = {
  dev: {
    port: parseInt(process.env.PORT, 10),
    database_URL: process.env.MONGODB_URI_DEV,
    api: {
      prefix: '/api-dev'
    },
    aws: {
      secretAccessKey: process.env.secretAccessKey,
      accessKeyId: process.env.accessKeyId
    }
  },
  prod: {
    port: parseInt(process.env.PORT, 10),
    database_URL: process.env.MONGODB_URI_PROD,
    api: {
      prefix: '/api'
    },
    aws: {
      secretAccessKey: process.env.secretAccessKey,
      accessKeyId: process.env.accessKeyId
    }
  }
};

//Will return the specific configurations based on the environment
const getConfig = () => {
  return process.env.NODE_ENV === 'development' ? config.dev : config.prod;
};

module.exports = getConfig;
