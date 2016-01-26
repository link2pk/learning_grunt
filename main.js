var rout = angular.module('routApp', ['ngRoute']);
rout.config(function ($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'pages/main.html',
			controller: 'mainController',

		})
		.when('/profile', {
			templateUrl: 'pages/profile.html',
			controller: 'profileController',

		})
		.when('/about', {
			templateUrl: 'pages/about.html',
			controller: 'aboutController',

		})
		.otherwise({
			template: 'This isn\'t set. '
		})

});


rout.controller('mainController', ['$scope', '$route', '$log', function ($scope, $route, $log) {
	$scope.myname = "main";
	$scope.person = "john doe";

	$scope.peopleDetails = [
		{
		name: $scope.person,
		hno: 231,
		street: 'Belvoir',
		zip: '11111'
		},
		{
		name: 'Ricky Martin',
		hno: 44,
		street: 'Stuart',
		zip: '22222'
		},
		{
		name: 'De Sonja',
		hno: 990,
		street: 'Castle',
		zip: '34457'
		}];
	
	$scope.address = function(obj){
		return obj.name+', '+obj.hno+', '+obj.street+', '+obj.zip;
	}

	//$log.log($scope.person);							   
}]);
rout.controller('profileController', ['$scope', '$route', 'nameService', function ($scope, $route, nameService) {
	$scope.myname = "profile";
	$scope.name = nameService.name;
	$scope.$watch('name', function () {
		nameService.name = $scope.name;
	});

}]);
rout.controller('aboutController', ['$scope', '$route', 'nameService', function ($scope, $route, nameService) {
	$scope.myname = "about";
	$scope.name = nameService.name;
	$scope.$watch('name', function () {
		nameService.name = $scope.name;
	});

}]);

/* controller for active class on li */
rout.controller('navController', ['$scope', '$location', function ($scope, $location) {

	$scope.isActive = function (destination) {
		return destination === $location.path();
	}
}]);


/* angular service */
rout.service('nameService', function () {

	this.name = "your name";

});


rout.directive('directive1', function () {
	return {
		templateUrl: 'templates/list.html',
		replace: true, //to remove custom html element. For ex. directive1 in this case
		scope: {
			personName: '@', //@ is for text//= is for object//& is for function
			personDetails: '=',
			addressFunction: '&'

		},
		transclude: true
	}
});