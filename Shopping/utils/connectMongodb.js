const mongoose = require('mongoose');
const { db } = require('../configs/database');

const auth = db.user && db.password ? `${db.user}:${db.password}@` : '';

mongoose.connect(`${db.connect}://${auth}${db.host}:${db.port}/${db.database}`);

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo server.');
});
/**
 * Event listener for "error" event.
 */
mongoose.connection.on('error', (error) => {
    throw new Error(error);
});

module.exports = mongoose;
