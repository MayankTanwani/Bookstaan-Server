const Sequelize = require('sequelize')

// const db = new Sequelize('heroku_83b8f66681e3f3e','b26016eeca0119','ee3b64f4',{
//     host : 'us-cdbr-iron-east-04.cleardb.net',
//     dialect : 'mysql',
//     pool : {
//         min : 0,
//         max : 5,
//     }
// })
const db = new Sequelize('booksdb','booker','bookpass',{
    host : 'localhost',
    dialect : 'mysql',
    pool : {
        min : 0,
        max : 5,
    }
})



const Op = Sequelize.Op

const User = db.define('user',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type: Sequelize.STRING,
        allowNull: false
    },
    email : {
        type: Sequelize.STRING,
        allowNull: false
    },
    college : {
        type: Sequelize.STRING,
        allowNull: false
    },
    address : {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone : {
        type: Sequelize.STRING,
        allowNull: false
    },
    picture : {
        type: Sequelize.STRING,
        defaultValue : "http://getdrawings.com/img/cool-facebook-profile-picture-silhouette-10.jpg"
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false,
        collate: 'utf8_general_ci'
    }
})

const Listing = db.define('listing',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    seller : {
        type : Sequelize.INTEGER,
        allowNull : false,
    },
    bookName : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    authorName : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    image : {
        type : Sequelize.STRING,
        defaultValue:"https://gangarams.com/image/cache/placeholder-250x250.png"
    },
    price : {
        type : Sequelize.FLOAT,
        allowNull : false,
    },
    bookCondition : {
        type : Sequelize.ENUM('New','Almost New','Slight Damage','Worn'),
        allowNull : false
    },
})

Listing.belongsTo(User,{foreignKey: 'seller',targetKey : 'id'})

const Message = db.define('message',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    bookID : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    bookName : {
        type : Sequelize.STRING,
        allowNull : false
    },
    title : {
        type : Sequelize.STRING,
        allowNull : false
    },
    comment : {
        type : Sequelize.STRING,
        allowNull : false
    },
    senderID : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    senderName : {
        type : Sequelize.STRING,
        allowNull : false
    },
    senderPic : {
        type : Sequelize.STRING,
        allowNull : false
    },
    recipientID : {
        type : Sequelize.STRING,
        allowNull : false
    }

})

Message.belongsTo(Listing,{foreignKey: 'bookID',targetKey:'id'})
Message.belongsTo(User,{foreignKey:'senderID',targetKey:'id'})
// Message.belongsTo(User,{foreignKey:'recipientID',targetKey:'id'})

const WishList = db.define('wishList',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    bookID : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    userID : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    bookName : {
        type : Sequelize.STRING,
        allowNull : false
    },
    bookPic : {
        type : Sequelize.STRING,
        allowNull : false
    },
    authorName : {
        type : Sequelize.STRING,
        allowNull : false
    },
    price : {
        type : Sequelize.FLOAT,
        allowNull : false
    },
    bookCondition : {
        type : Sequelize.ENUM('New','Almost New','Slight Damage','Worn'),
        allowNull : false
    }
})


WishList.belongsTo(Listing,{foreignKey: 'bookID',targetKey:'id'})
WishList.belongsTo(User,{foreignKey:'userID',targetKey:'id'})

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    User,Listing,Message,WishList,Op
}