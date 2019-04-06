const ctrl = {};

ctrl.index = async (req, res) =>{
   res.render('groupnew', { title: 'home', layout: 'simplemain' } );
}



module.exports = ctrl;