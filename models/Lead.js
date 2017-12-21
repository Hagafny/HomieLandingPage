const mongoose = require('mongoose');

const leadSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
});

module.exports = mongoose.model('Lead', leadSchema);