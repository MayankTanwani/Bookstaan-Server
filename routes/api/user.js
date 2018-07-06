const User = require('../../db').User
const route = require('express').Router();

route.post('/',getAllUsers)
route.post('/login',authenticateUser)
route.post('/signup',signUpNewUser)

function getAllUsers(req,res) {
    User.findAll({
        where : {
            id : req.body.id
        }
    })
        .then((items) => {
            res.status(200).send(items[0])
        })
}

function authenticateUser(req,res) {
    User.findAll({
        where : {
            email : req.body.email,
            password : req.body.password
        }
    }).then((items)=>{
        if(items.length > 0 ){
            console.log("User Authenticated and logged in");
            res.status(200).send(items);
        }
        else{
            console.log("Invalid email password");
            res.status(401).send({
                error : "Invalid email password"
            })
        }
    })
}

function addNewUser(req, res) {
    let picture = "http://getdrawings.com/img/cool-facebook-profile-picture-silhouette-10.jpg";
    if(req.body.picture !== undefined){
        picture = req.body.picture
    }
    User.create({
        name : req.body.name,
        email : req.body.email,
        college : req.body.college,
        address : req.body.address,
        phone : req.body.phone,
        password: req.body.password,
        picture: picture
    }).then((items) => {
        res.status(200).send(items);
    }).catch((error) => {
        res.status(401).send({
            error: "Error adding user"
        })
    })
}

function signUpNewUser(req,res) {
    User.find({
        where : {
            email : req.body.email,
        }
    })
        .then((items) => {
            if(items == null){
                console.log("Creating new User");
                addNewUser(req,res);
            }
            else{
                console.log("User Email already exists");
                // Please Login or use any other email
               res.status(401).send({
                   error : "Email exists"
               });
            }
        })
}

exports = module.exports = route