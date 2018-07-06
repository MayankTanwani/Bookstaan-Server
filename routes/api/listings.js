const Listing = require('../../db').Listing
const Op = require('../../db').Op
const route = require('express').Router();

route.get('/',getAllListings)
route.post('/',getAllUserListings)
route.post('/post',getAllUserListings)
route.get('/price',filterByPrice)
route.get('/condition',filterByCondition)
route.get('/queryName',filterByName)
route.get('/queryAuthor',filterByAuthor)
route.get('/filter',filterByBoth)
route.post('/add',addNewListing)


function getAllUserListings(req,res) {
    let userID = +req.body.userID
    Listing.findAll({
        where : {
            seller : userID
        }
    }).then((items) => res.status(200).send(items))
        .catch((error) => console.log(error))
}

function getAllListings(req,res) {
    if(req.query.id !==undefined) {
        let id = +req.query.id
        Listing.findAll({
            where : {
                id : id
            }
        }).then((items) => {
            res.status(200).send(items)
        }).catch((error) => {
            console.log(error)
            res.status(501).send({
                error : "Error getting Listing"
            })
        })
        return
    }
    Listing.findAll().then((items) => {
        res.status(200).send(items)
    }).catch((error) => {
        console.log(error)
        res.status(501).send({
            error : "Error getting Listing"
        })
    })
}
function filterByCondition(req,res) {
    console.log(req.query.stringVal)
    let stringVal = req.query.stringVal;
    let filterCondition = []
    for(let i=1;i<=4;i++){
        if(stringVal[i-1] == '1'){
            filterCondition.push({
                bookCondition: i
            })
        }
    }
    console.log(filterCondition)
    Listing.findAll({
        where : {
            [Op.or] : filterCondition
        }
    }).then((items) => res.send(items))
        .catch((error)=> {
            console.log(error)
            res.status(501).send({
                error : "Error getting Listing"
            })
        })
}

function filterByPrice(req,res) {
    let maxPrice = parseFloat(req.query.maxPrice)
    let minPrice = req.query.minPrice
    if(minPrice === undefined)
        minPrice = 0
    else
        minPrice = parseFloat(minPrice)
    Listing.findAll({
        where : {
            price : {
                [Op.between] : [minPrice,maxPrice]
            }
        }
    }).then((items) => res.send(items))
        .catch((error)=> {
            console.log(error)
            res.status(501).send({
                error : "Error getting Listing"
            })
        })
}

function filterByBoth(req,res) {
    let maxPrice = req.query.maxPrice;
    if(maxPrice === undefined){
        maxPrice = 2147483647
    }else
        maxPrice = parseFloat(maxPrice)

    let minPrice = req.query.minPrice;
    if(minPrice === undefined){
        minPrice = 0
    }else
        minPrice = parseFloat(minPrice)

    let bookCondition = req.query.bookCondition;
    let filterCondition = []
    for(let i=1;i<=4;i++){
        if(bookCondition[i-1] == '1'){
            filterCondition.push({
                bookCondition: i
            })
        }
    }

    Listing.findAll({
        where : {
            [Op.and] : [
                {
                    price : {
                        [Op.between] : [minPrice,maxPrice]
                    }
                },
                {
                   [Op.or] : filterCondition
                }
            ]
        }
    }).then((items) => res.send(items))
        .catch((error)=> {
            console.log(error)
            res.status(501).send({
                error : "Error getting Listing"
            })
        })
}

function filterByName(req,res) {
    let bookName = req.query.bookName
    if(bookName === undefined)
        bookName = ""
    console.log(bookName)
    Listing.findAll({
        where : {
            bookName : {
                $like :"%" + bookName + "%"
            }
        }
    }).then((items) => res.send(items))
        .catch((error)=> {
            console.log(error)
            res.status(501).send({
                error : "Error getting Listing"
            })
        })
}

function filterByAuthor(req,res) {
    let authorName = req.query.authorName
    if(authorName === undefined)
        authorName = ""
    Listing.findAll({
        where : {
            authorName : {
                $like :"%" + authorName + "%"
            }
        }
    }).then((items) => res.send(items))
        .catch((error)=> {
            console.log(error)
            res.status(501).send({
                error : "Error getting Listing"
            })
        })
}

function addNewListing(req,res) {
    Listing.create({
        seller : +req.body.seller,
        bookName : req.body.bookName,
        authorName : req.body.authorName,
        image : req.body.image,
        price : parseFloat(req.body.price),
        bookCondition : req.body.bookCondition
    })
        .then((items) => {
            console.log(items)
            res.status(200).send(items)
        })
        .catch((error) => {
            console.log(error)
            res.status(501).send({
                error : "Error adding items"
            })
        })
}

exports = module.exports = route