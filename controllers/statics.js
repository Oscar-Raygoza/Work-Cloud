module.exports = {
    index: function(req,res){
        res.render('statics/index');
    },
    error404: function(req,res){
        res.render('statics/404-error');
    },
    help: function(req,res){
        res.render('statics/help');
    },
    register: function(req,res){
        res.render('statics/register');
    },
    login: function(res,req){
        res.render('statics/login');
    }

}