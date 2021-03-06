var express = require('express');
var app = express();
var articlesRoute = require('./routes/articles.js');
var productsRoute = require('./routes/products.js');
var jade = require('jade');
var methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use('/articles', articlesRoute);
app.use('/products', productsRoute);
app.set('view engine', 'jade');
app.set('views', './templates');

app.listen(8080, function(){
  console.log('App Listening!');
});