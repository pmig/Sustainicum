'use strict';

/* Controllers */


function HomeCtrl($scope,$http) {

}
HomeCtrl.$inject = ['$scope','$http'];


function SpielCtrl($scope,$http) {
  $http.get('./data/scenario1.json').success(function(data) {
    $scope.scenario1Products = data;
  });

  $scope.scenario1Meta = {
    "budget": 1000.0,
    "co2": 50.30,
    "happiness": 100
  };

  var cart = [];
  $scope.alerts = [];

  $scope.getBudget = function (format) {
    var tmpSum = 0;
    for (var i = cart.length - 1; i >= 0; i--) {
      tmpSum += cart[i][0].product.price * cart[i][1];
    }
    if (format=='pro') {
      return ($scope.scenario1Meta.budget - tmpSum) / $scope.scenario1Meta.budget * 100;
    } else {
      return $scope.scenario1Meta.budget - tmpSum;
    }
  };

  $scope.getCo2 = function (format) {
    var tmpSum = 0;
    for (var i = cart.length - 1; i >= 0; i--) {
      tmpSum += cart[i][0].product.co2 * cart[i][1];
    }
    if (format=='pro') {
      return tmpSum / $scope.scenario1Meta.co2 * 100;
    } else {
      return tmpSum;
    }
  };

  $scope.getHappiness = function(format) {
    var tmpSum = 0;
    for (var i = cart.length - 1; i >= 0; i--) {
      tmpSum += cart[i][0].product.happiness * cart[i][1];
    }
    if (format == 'pro') {
      return tmpSum / $scope.scenario1Meta.happiness * 100;
    } else {
      return tmpSum;
    }
  };

  $scope.getAmount = function (id) {
    var pos = inCart(id);
    if (pos == -1) {
      return 0;
    } else {
      return cart[pos][1];
    }
  };

  function inCart (id) {
    for (var i = cart.length - 1; i >= 0; i--) {
      if (cart[i][0].product.id == id) return i;
    }
    return -1;
  }

  function checkCart () {
    if ($scope.getBudget() < 0) {
      $scope.alerts.push({ type: 'error', msg: 'Achtung, du hast dein komplettes Geld Verbraucht!' });
    }
    if ($scope.getHappiness() >= 100) {
      $scope.alerts.push({type:'success', msg: 'Gratulation, du hast die maximale Zufriedenheit errreicht!'});
    }
  }

  $scope.exec = function(id, amount) {
    var pos = inCart(id);
    if (pos >= 0) {
      cart[pos][1] = amount;
    } else {
      cart.push([$scope.scenario1Products[id],amount]);
    }
    checkCart();
  };



  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
}
SpielCtrl.$inject = ['$scope','$http'];

function UeberunsCtrl($scope,$http) {

}
UeberunsCtrl.$inject = ['$scope','$http'];