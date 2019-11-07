var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rob' });
});

router.post('/setdata', async (request,response)=>{
console.log(request.body)
Response.end();
}
)

module.exports = router;
