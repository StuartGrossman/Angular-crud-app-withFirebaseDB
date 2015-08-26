var app = angular.module('app', ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/")
	$stateProvider
	.state("Home", {
		url: "/",
		templateUrl: "javascript/views/home.html",
		controller: "HomeController",
		controllerAs: "vm"
	})
	.state("Profile", {
		url: "/profile",
		templateUrl: "javascript/views/profile.html",
		controller: "ProfileController",
		controllerAs: "vm"
	})
	.state("CreateDog", {
		url: "/dog/create",
		templateUrl: "javascript/views/createDog.html",
		controller: "CreateDogController",
		controllerAs: "vm"
	})
	.state("EditDog", {
		url: "/editdog",
		templateUrl: "javascript/views/editDog.html",
		controller: "EditDogController",
		controllerAs: "vm"
	})

})