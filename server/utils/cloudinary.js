require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'khampheng',
    api_key: 241353416972781,
    api_secret: 'rSHN8Q46Ft7hFGOuAXzE1vbxQ6c',
});

module.exports = { cloudinary };
