const WishList = require('../../db').WishList
const route = require('express').Router();

route.post('/',getAllItems)
route.post('/add',addNewItems)
route.post('/remove',removeItem)

function getAllItems(req,res) {
    WishList.findAll({
        where : {
            userID : +req.body.userID
        }
    }).then((items) => {
        console.log("added")
        res.status(200).send(items)
    }).catch((error) => {
        console.log("not added")
        console.log(error)
        res.status(501).send({
            error : "Error recovery of items"
        })
    })
}

function addNewItems(req,res){
    WishList.findAll({
        where : {
            bookID : +req.body.bookID,
            userID : +req.body.userID,
        }
    }).then((items) => {
        if(items.length>0){
            res.status(200).send(items)
        }else{
            WishList.create({
                bookID : +req.body.bookID,
                userID : +req.body.userID,
                bookName : req.body.bookName,
                bookPic : req.body.bookPic,
                authorName : req.body.authorName,
                price : parseFloat(req.body.price),
                bookCondition : req.body.bookCondition
            }).then((items) => {
                console.log(items)
                res.status(200).send(items)
            }).catch((error) => {
                console.log(error)
                res.status(501).send({
                    error : "Error adding items"
                })
            })
        }
    })
        .catch(error => console.log(error))
}

function removeItem(req,res){
    WishList.destroy({
        where : {
            id : +req.body.id
        }
    })
        .then((items) => res.status(200))
        .catch((error) => console.log(error))
}

exports = module.exports = route