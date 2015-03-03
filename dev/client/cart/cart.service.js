(function(){

	"use strict";

	var cartService = function($http, $rootScope){

		var addProductToCart = function(product, quantity){
			if($rootScope.cartProducts[product.id]){
				console.log("exists");
			}
			$rootScope.cartProducts[product.id] = { // uses product.name as an ID for the object
				product: product,
				quantity: quantity,
				total: product.price * quantity
			}
		}

		var removeProduct = function(product){
			delete $rootScope.cartProducts[product.product.id]; // function to delete object from collection
		}

		var updateQuantity = function(item, quantity){
			$rootScope.cartProducts[item.product.id].quantity = quantity;
		}

		return {
			addProductToCart: addProductToCart,
			removeProduct: removeProduct,
			updateQuantity: updateQuantity
		}

	}

	angular
		.module("Main")
		.factory("cartService", cartService);

}());