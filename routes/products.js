var express = require('express');
var productsRoute = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var ProductDb = require('../db/productDb');


productsRoute.use(bodyParser.urlencoded({
  extended: true
}));

productsRoute.get('/'), function(req, res){
	ProductDb.getProduct();
};


productsRoute.post('/', function(req, res) {

	if(ProductDb.createProduct(req.body) === true) {

		res.json({success: true});
	}
});


productsRoute.put('/:id', function(req, res){

	var productId = req.params.id;
  ProductDb.getProduct(productId);
 	res.send({'success': true});

  
});

productsRoute.delete('/:id', function(req, res){

	var productData = req.body;



});


module.exports = productsRoute;