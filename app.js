var app = angular.module('anugoonj', ['ngRoute'])
app.controller('EventController', function ($scope) {
	 self = this
	 self.click = function () {
	 	console.log("Here!");
	 	$('#modal1').modal('open');
	 }
})

app.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
			when('/', {
				redirectTo: '/home'
			}).
			when('/home', {
				template: '<home></home>'
			}).
			when('/events', {
				template: '<events></events>'
			}).
			when('/chat', {
				template: '<chat></chat>'
			}).
			when('/sponsors', {
				template: '<sponsors></sponsors>'
			})
		}]);

app.controller('TabController', function ($location, $scope) {
		$scope.tab = $location.path()
		$scope.setTab = function (stab) {
			$scope.tab = stab
			console.log(stab);
			$location.path(stab);
			$scope.$evalAsync()
			$(document).ready(function () {
		$('.button-collapse').sideNav('hide');
			})
		}
		$scope.isSet = function (stab) {
			return $scope.tab == stab
		}
	})

	app.directive('home',[ '$http', function ($http) {
		return {
			restrict: 'E',
			templateUrl: 'partials/tabs/home.html'
		}
	}]);

		app.directive('events',[ '$http', function ($http) {
		return {
			restrict: 'E',
			templateUrl: 'partials/tabs/events.html',
			controller: function ($scope) {
				$scope.openModal = function (theme) {
					$scope.currentEvent = events[theme]
					console.log($scope.currentEvent);
					$scope.$evalAsync()
					 $(document).ready(function () {
					 	$('.modal').modal('open');
					 })
				}
			}
		}
	}]);

			app.directive('sponsors',[ '$http', function ($http) {
		return {
			restrict: 'E',
			templateUrl: 'partials/tabs/sponsors.html'
		}
	}]);

				app.directive('chat',[ '$http', function ($http) {
		return {
			restrict: 'E',
			templateUrl: 'partials/tabs/chat.html'
		}
	}]);
