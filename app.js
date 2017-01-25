var app = angular.module('anugoonj', [])
app.controller('EventController', function ($scope) {
	 self = this
	 self.click = function () {
	 	console.log("Here!");
	 	$('#modal1').modal('open');
	 }
})