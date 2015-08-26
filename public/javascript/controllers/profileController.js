app.controller('ProfileController', ["HomeFactory", '$state', function(HomeFactory, $state){
	var vm = this;
	vm.editStatus = false;
	vm.dogsArray = HomeFactory.dogArr;
	vm.dog = {}
	vm.dogIndex = HomeFactory.placeofIndex;
	console.log(vm.dogIndex);
	vm.startDelete = function(index){
		console.log('gana try and delete');

		console.log(vm.dogsArray[index]._id);
		
		HomeFactory.deleteDog(vm.dogsArray[index]._id).then(function(){
			HomeFactory.dogArr.splice(index, 1);
			alert('deleted ' + vm.dogsArray[index].name);
			$state.go('Home');
		})
		
	}
	
	vm.editDog = function(){
		// console.log(HomeFactory.index)
		console.log('trying to edit')
		console.log('this is the index we want ' + HomeFactory.index)
		vm.editStatus = true;
	}
	vm.submitEdit = function(index){
		console.log(index)
		console.log('gana replace values here')
		vm.dog._id = HomeFactory.dogArr[index]._id
		console.log(vm.dog)
		HomeFactory.edit(vm.dog, index).then(function(){
			vm.editStatus = false;
			$state.go('Home');
		})
		// HomeFactory.edit(index, vm.dog);
		
	}
}])