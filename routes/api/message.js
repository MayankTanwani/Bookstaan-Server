const Message = require('../../db').Message
const route = require('express').Router();

route.post('/',getAllMessages)
route.post('/add',addNewMessage)

function getAllMessages(req,res) {
    Message.findAll({
        where : {
            recipientID : req.body.recipientID
        }
    }).then((items) => {
        console.log("added")
        res.status(200).send(items)
    }).catch((error) => {
        console.log("not added")
        console.log(error)
        res.status(501).send({
            error : "Error recovery of messages"
        })
    })
}

function addNewMessage(req,res){
    Message.create({
        bookID : +req.body.bookID,
        bookName : req.body.bookName,
        title : req.body.title,
        comment : req.body.comment,
        senderID : +req.body.senderID,
        senderName : req.body.senderName,
        senderPic : req.body.senderPic,
        recipientID : req.body.recipientID
    }).then((items) => {
        console.log(items)
        res.status(200).send(items)
    }).catch((error) => {
        console.log(error)
        res.status(501).send({
            error : "Error adding message"
        })
    })
}

exports = module.exports = route