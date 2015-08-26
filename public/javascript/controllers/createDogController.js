app.controller("CreateDogController", ["HomeFactory", '$state', function(HomeFactory, $state){
	var vm = this;
	vm.dog = {};

	vm.createDog = function(){
		console.log('im here in createdog')
		HomeFactory.addDog(vm.dog).then(function(){
			alert('New Dog Created')
			vm.dog = {};
			$state.go('Home');
		});
		
	}
	
}])