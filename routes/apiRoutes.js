// Install/require dependencies
var db = require('../models');

module.exports = function(app) {
    app.post('/api/newAttendee', function(req,res) {
        console.log(req)
        db.Attendee.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            item: req.body.item,
            funQuestion: req.body.funQuestion,
            childhoodQuestion: req.body.childhoodQuestion,
            originQuestion: req.body.originQuestion
        }).then(function(response){
            res.json(response)
        })    
    });

    app.get('/', function(req, res) {
        db.Attendee.findAll().then(function(response){
            console.log("response", response)
            res.render('home', {attendee: response, GOOGLE_API_KEY: process.env.GOOGLE_API_KEY})
        })
    });
    
    
};
