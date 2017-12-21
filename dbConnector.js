const mongoose = require('mongoose');

let connect = (callback) => {
    var mongodbUri = 'mongodb://heroku_rh4mp4nv:n83g7vbp86e3ke4ng1dgie9gjc@ds163156.mlab.com:63156/heroku_rh4mp4nv';
    
    mongoose.connect(mongodbUri, {useMongoClient: true});
    let conn = mongoose.connection;
    conn.on('error', console.error.bind(console, 'connection error:'));
    conn.once('open', function () {
        callback();
    });
}

module.exports = connect;