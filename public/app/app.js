// inject the stuff service into our main Angular module
angular.module('myApp', ['stuffService'])

// create a controller and inject the stuff factory
.controller('userController',  function(Stuff){

	var vm = this;

	// get alll the stuf
	Stuff.all()

		// promise object
		.success(function(data){

			// bind the data to a controller variable
			// this comes from the stuffService
			vm.stuff = data;
		});
});