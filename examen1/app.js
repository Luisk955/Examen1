angular.module('products', ['products.controllers', 'products.factories', 'ngRoute', 'firebase'])

.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: "views/products.html",
		controller: 'listController as list'
	})
	.when('/products', {
		templateUrl: "views/products.html",
		controller: 'listController as list',
	})
	.when('/product/:id', {
		templateUrl: "views/product.html",
		controller: 'editController as product'
	})
	.when('/new', {
		templateUrl: "views/product.html",
		controller: 'addController as product'
	})
	.otherwise({
		redirectTo: '/'
	});

	 var config = {
	    apiKey: "AIzaSyDQ-Hs3oG2uMTSFGnkEV1NF2ZeMLCD3VGg",
	    authDomain: "practicas-pi.firebaseapp.com",
	    databaseURL: "https://practicas-pi.firebaseio.com",
	    storageBucket: "practicas-pi.appspot.com",
  	};
  firebase.initializeApp(config);
});

