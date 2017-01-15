(function(){
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){
		$scope.name = '';
		$scope.message = '';
		$scope.check = function () {
			if ($scope.name === ''){
				$scope.message = 'Please enter data first';
				return;
			}
			var lunchNumber = $scope.name.split(',');
			if (lunchNumber.length < 4) $scope.message = 'Enjoy!';
			else $scope.message = 'Too much!';
		}
	}

})();