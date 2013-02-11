function ScenarioCtrl ($scope, $http) {
	
	// $http.data('../get/scenario1.json').success(function(data) {
	// 	$scope.scenario1Products = data;
	// });

	// ScenarioCtrl.$inject = ['$scope', '$http'];

	/*
	
		THIS IS A DUMMY BECAUSE CORX REQ DOESNT WORK ON file:///

	 */
	$scope.scenario1Products =
	[
		{"product": {
			"id": 0,
			"name": "Produkt1",
			"price": 10.3,
			"co2": 5,
			"snippet": "Produkt1 Beschreibung"}},
		{"product": {
			"id": 1,
			"name": "Produkt2",
			"price": 200.50,
			"co2": 9.99,
			"snippet": "Produkt2 Beschreibung"}}
	];

	$scope.scenario1Meta =
		{"budget": 1000.0,
		 "co2": 50.30};


	var cart = new Array();

	$scope.getBudget = function () {
		var tmpSum = 0;
		for (var i = cart.length - 1; i >= 0; i--) {
			tmpSum += cart[i][0].product.price * cart[i][1];
		};
		return $scope.scenario1Meta.budget - tmpSum;
	}

	$scope.getBudgetPro = function () {
		return $scope.getBudget() / $scope.scenario1Meta.budget * 100;
	}

	$scope.getCo2 = function () {
		var tmpSum = 0;
		for (var i = cart.length - 1; i >= 0; i--) {
			tmpSum += cart[i][0].product.co2 * cart[i][1];
		};
		return tmpSum;
	}

	$scope.getCo2Pro = function () {
		return $scope.getCo2() / $scope.scenario1Meta.co2 * 100;
	}

	function inCart (id) {
		for (var i = cart.length - 1; i >= 0; i--) {
			if (cart[i][0].product.id == id) return i;
		};
		return -1;
	}

	function checkCart () {
		// body...
	}

	$scope.exec = function(id, amount) {
		var pos = inCart(id);
		if (pos >= 0) {
			cart[pos][1] = amount;
		} else {
			cart.push([$scope.scenario1Products[id],amount]);
		}
		checkCart();


	}


}