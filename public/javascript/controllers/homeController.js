app.controller('HomeController', ["HomeFactory", '$state', function(HomeFactory, $state){
	var vm = this;
	vm.dogsArray = HomeFactory.dogArr;
	vm.saveIndexitem = [];
	vm.saveIndex = function(click_index){
		vm.saveIndexitem = click_index
		console.log(vm.saveIndexitem);
		HomeFactory.savedIndex(vm.saveIndexitem);
		vm.saveIndexitem = [];
	}
}])