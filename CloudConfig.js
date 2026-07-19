const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const config = require('./config');

cloudinary.config({
    cloud_name : config.cloudinary.cloudName,
    api_key : config.cloudinary.apiKey,
    api_secret : config.cloudinary.apiSecret
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'bharatFootwear',
    allowedFormats : ['png', 'jpeg', 'jpg'] // supports promises as well
  },
});

module.exports = { cloudinary, storage };
