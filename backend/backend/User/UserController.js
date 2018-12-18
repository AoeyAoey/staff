var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var VerifyToken = require(__root + 'auth/VerifyToken');

// router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('./User');

// CREATES A NEW USER
router.post('/', function (req, res) {
    User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        }, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/getAll', function (req, res) {
    User.find({},{name:1,email:1,phone:1,gender:1,crateDate:1,updateDate:1}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});
router.get('/getThisDay', function (req, res) {
    var d = new Date();
    //.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })
    var todayS = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}T00:00:00Z`
    var todayE = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}T23:59:59Z`
    console.log(todayS,todayE)
    User.find({crateDate:{$gte: new Date(todayS), $lt: new Date(todayE)}}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});
// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ user.name +" was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
// Added VerifyToken middleware to make sure only an authenticated user can put to this route
router.put('/:id', /* VerifyToken, */ function (req, res) {
    // console.log(req.body)
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});


module.exports = router;