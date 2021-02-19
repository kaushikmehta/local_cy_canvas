var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('html', { title: 'Express' });
});

router.post('/', function(req, res) {
  console.log('asd')
  const data = req.body.val;
  console.log(data);
  
  try {
    
    const stringified = JSON.parse(data);
    // console.log("dataaaaaaa", stringified);
    var jsonPath = path.join(__dirname, '..', 'cypress', 'fixtures', 'sample.json');
    fs.writeFileSync(jsonPath, data);
    
  } catch (error) {
    console.log(error)
  }
  
  // res.render('html', { title: 'Express' });
  res.redirect("/");

})

module.exports = router;
