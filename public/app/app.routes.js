angular.module('app.routes', ['ngRoute'])

. config(function($routeProvider, $locationProvider) {

	$routeProvider

		// homepage route
		.when('/', {
			templateUrl: 'app/views/pages/home.html'
		})

		// login page
		.when('/login', {
			templateUrl : 'app/views/pages/login.html',
			controller : 'mainController',
			controllerAs: 'login'
		});

	// get rid or the hash in the URL
	$locationProvider.html5Mode(true);
});