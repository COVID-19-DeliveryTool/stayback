module.exports = {isSessionAuthenticated}

function isSessionAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        console.log('yes')
        next()
    } else {
        console.log('no')
        next()
    }
}