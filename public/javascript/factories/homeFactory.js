app.factory("HomeFactory", ['$http', '$q', function($http, $q){
	console.log('home factory running')
	var o = {};
	o.dogArr = [];
	var firebase = "https://agulardog.firebaseio.com/"
	o.addDog = function(dog){
		console.log(dog)
		var q = $q.defer();
		//$http.post("url", (obj)).success(function(response as javascript){do something})
		$http.post(firebase + '.json', dog).success(function(res){
			dog._id = res.name;
			o.dogArr.push(dog);
			q.resolve();
			
		})
		return q.promise;
	}
	o.savedIndex = function(index){
		o.placeofIndex = index;
	}
	o.deleteDog = function(dog){
		var q = $q.defer();
		$http.delete(firebase + dog + '.json').success(function(res){
			console.log('successfull delete')
			q.resolve();
		})
		return q.promise;
	}
	o.edit = function(dog, index){
		// console.log('factory control edit ' + index)
		var q = $q.defer();
		$http.put(firebase + dog._id + '.json', dog).success(function(){
			q.resolve();
		})
		o.dogArr[index] = dog;
		return q.promise;
	}

	$http.get(firebase + '.json').success(function(res){
		for(var prop in res){
			res[prop]._id = prop;
			o.dogArr.push(res[prop]);
		}
	})

	return o;
}]);