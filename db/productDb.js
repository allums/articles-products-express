var products = require('./persistantProducts.js');

var productDb = (function(){

  function getProduct(id){ 
    for (var i = 0; i < products.length; i++){
      if (id == products[i].id){
        return products[i];
      }
    }
  }

  function createProduct(productinfo){
    productinfo.id = Math.floor(Math.random() * 100000);
    products.push(productinfo);
    console.log(products);
    return true; 
  }

  function editProduct(id, data){ 
    var product = getProduct(id);
    product.name = data.name;
    product.price = data.price;
    product.inventory = data.inventory;
    return product;
  }

  function deleteProduct(id, data){  
    var product = getProduct(id);
    products.splice(product,1);
    return true;
  }

  function getAllProducts(){
    return products;
  }

  return {
    createProduct: createProduct,
    getProduct: getProduct,
    editProduct: editProduct,
    deleteProduct: deleteProduct,
    getAllProducts: getAllProducts
  };

})();

module.exports = productDb;








