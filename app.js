// app.js文件

var express = require('express');
var app = express();
var router = express.Router();

var hbs = require('hbs');

// 加载数据模块
var blogEngine = require('./blog');
 
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.use(express.static('public'));
 
router.get('/', function(req, res) {
   res.render('index',{title:"最近文章", entries:blogEngine.getBlogEntries()});
});
router.get('/home', function(req, res){
	res.sendfile('views/home.html');
});
router.get('/about', function(req, res) {
   res.render('about', {title:"自我介绍"});
});
 
router.get('/article/:id', function(req, res) {
   var entry = blogEngine.getBlogEntry(req.params.id);
   res.render('article',{title:entry.title, blog:entry});
});

router.get('/post', function(req, res){
	res.sendfile('views/post.html');
});
router.get('/main', function(req, res){
	res.sendfile('views/main.html');
});
router.get('/component/grid', function(req, res){
	res.sendfile('views/component/grid.html');
});

app.use('/', router);
 
app.listen(3000);