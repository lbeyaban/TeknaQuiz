let indexController = {}


indexController.getIndexPage = async function (req, res , next) {
    
  res.render('index', { title: 'Express' });

}


module.exports = indexController