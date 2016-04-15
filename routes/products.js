var express = require('express');
var productsRoute = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var ProductDb = require('../db/productDb');
productsRoute.use(bodyParser.urlencoded({
  extended: true
}));

//get products

productsRoute.get('/'), function(req, res){
	ProductDb.getProduct();
};

//create new product and store to persProds

productsRoute.post('/', function(req, res) {

	if(ProductDb.createProduct(req.body) === true) {

		res.json({success: true});
	}
});

//find and modify an item by id

productsRoute.put('/:id', function(req, res){

	var productId = req.params.id;
  ProductDb.editProduct(productId, req.body);
 	res.send({'success': true});

});

//find and delete an item by id

productsRoute.delete('/:id', function(req, res){

	var productId = req.params.id;
	ProductDb.deleteProduct(productId, req.body);
	
	
});


module.exports = productsRoute;