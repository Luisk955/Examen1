/*angular.module('starter.controllers', [])

.controller('listController', function($location, $products){
  var list = this;

  $products.list().then(function(products){
    list.products = products;
  }, function(error){
    console.log(error);
    alert(error.message);
  }); 
})
*/
angular.module('starter.controllers', [])

.controller('ProductsCtrl', function($firebaseArray){
  var products = this;
  products.catalog = [];
  var ref = firebase.database().ref().child('products');

  $firebaseArray(ref).$loaded().then(
    function(results){
      products.catalog = results;
    }, function(error){
      console.error(error);
      alert(error);
    }
  );
})

.controller('addController', function($firebaseArray){
  var add = this;

  add.save = function(){
    $products.add(add.product).then(function(){
      alert('Success!');
    }, function(error){
      alert('Error');
      console.log(error);
    });
  };

})



