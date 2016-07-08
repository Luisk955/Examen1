angular.module('starter.services', [])

.factory('$products', function($firebaseArray, $firebaseObject){
	var products = {};
	var ref = firebase.database().ref().child('products');
	var list = $firebaseArray(ref);
	var cache = [];

	products.list = function(){				
		return list.$loaded().then(function(products){
			return cache = products;
		});
	};

	products.add = function(product){
		return list.$add(product);
	};

	products.get = function(id){
		return cache.$getRecord(id);
	};

	products.edit = function(product){
		return list.$save(product);
	};
	products.remove = function(product){
		return list.$remove(product);
	}

	return products;
})