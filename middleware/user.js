const {User} = require('../db')

function userMiddleware(req,res,next){

    const username = req.headers.username;
    const password = req.headers.password

    User.findOne({
        username:username,
        password:password
    })
    .then(function(){
        if(value()){
            next()
        }
        else{
            res.status(403).json({
                "msg": "User dosent exist!"
            })
        }
    })
}

module.exports = userMiddleware