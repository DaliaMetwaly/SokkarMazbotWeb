
module.exports.ifNotLoggedin = function(req, res,next){
    var list = {},
        rc = req.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    if(!list.userToken){

        return res.redirect('/login');
    }
    next();
 };