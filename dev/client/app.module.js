(function(){

	"use strict"; // for error messages - undeclared variables and more

	angular
		.module("Main", [
			"ngRoute",
			"Main.products", 
			"Main.product",
			"Main.cart"
			]
		)
		.config(function($routeProvider){
			$routeProvider
				.when('/product/:id', {
					templateUrl: './products/product.html',
					controller: 'productController'
				})
				.when('/', {
					templateUrl: './products/products.html',
					controller: 'productsController'
				})
				.when('/checkout/basket', {
					templateUrl: './cart/checkout.html',
					controller: 'cartController'
				})
				.otherwise({
					redirectTo: '/'
				});
		})
		.run(function($rootScope){
			$rootScope.cartProducts = {};
		});
		

})();