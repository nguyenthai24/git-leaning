const multer = require('multer');
const path = require('path');
const fs = require('fs-extra');

const storage = multer.diskStorage({
    destination: function (ctx, file, cb) {
        console.log(fs.ensureDirSync(path.join(__dirname, '../public/uploads')))
        if (!fs.ensureDirSync(path.join(__dirname, '../public/uploads'))) {
            fs.mkdirpSync(path.join(__dirname, '../public/uploads'));
        }
        cb(null, path.join(__dirname, '../public/uploads'));
    },
    filename: function (req, file, cb) {
        let type = file.originalname.split('.')[1];
        cb(null, `${file.fieldname}-${Date.now().toString(16)}.${type}`);
    },
});

const fileFilter = (ctx, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
        return cb(null, false);
    }
    // Only allow images pass
    cb(null, true);
};

module.exports = multer({ storage, fileFilter });
