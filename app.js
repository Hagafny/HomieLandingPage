const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Lead = require('./models/Lead');

require('./dbConnector')(() => {
    console.log('mongo connected!');
})

app.set('port', process.env.PORT || 7000);

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(express.static(path.join(__dirname, 'dist')));

app.post('/lead', (req, res) => {
        new Lead(req.body).save((err, savedLead) => {
            if (err) {
                console.error(err);
                res.status(400).json("invalid input, object invalid");
            }
            else 
                res.status(201).json("success");
        });
});

app.listen(app.get('port'), function () {
    console.log('Game is running on: ' + app.get('port'));
}); 