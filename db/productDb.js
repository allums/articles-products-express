var products = require('/persistantProducts.js');


var productDb = (function(){


function getProduct(id){
  console.log(products);
  
  for (var i = 0; i < products.length -1; i++){
    console.log(products[i]);

    if (id === products[i].id){
      console.log('works');
    }

  }
}

function createProduct(productinfo){

  //console.log(productinfo);
  productinfo.id = Math.floor(Math.random() * 100000);
  //console.log(productinfo);
  products.push(productinfo);
  console.log(products);
  return true;
 
  
}




return {
  createProduct: createProduct,
  getProduct: getProduct
};


})();

module.exports = productDb;








