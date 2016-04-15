var express = require('express');
var productsRoute = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var ProductDb = require('../db/productDb');
productsRoute.use(bodyParser.urlencoded({
  extended: true
}));

productsRoute.get('/', function(req, res){
	var products = ProductDb.getAllProducts();
	res.render('products/index', {products: products});
});

productsRoute.get('/:id/edit', function(req, res){
	var productId = req.params.id;
	var product = ProductDb.getProduct(productId);
	res.render('products/edit', {product: product});
});

productsRoute.post('/', function(req, res) {
	if(ProductDb.createProduct(req.body) === true) {
		res.json({success: true});
	}
	else {
		res.json({'success': false});
	}
});

productsRoute.put('/:id', function(req, res){
	var productId = req.params.id;
  ProductDb.editProduct(productId, req.body);
 	res.json({'success': true});
});

productsRoute.delete('/:id', function(req, res){
	var productId = req.params.id;
	if (ProductDb.deleteProduct(productId, req.body) === true){
		res.json({'success': true});
	}
	else {
		res.json({'success': false});
	}
});

module.exports = productsRoute;