

myApp.directive('myBook',['$http',function($http){

	return{
         restrict : "E",
         templateUrl : "Angular/view/book-view.html",
         scope : {
         	src : "="
         },
         controller : function($scope)
         {
         	

         	console.log($scope.src);
         	$scope.heading = "Heading";
           $scope.loadbooks = function()
           {
           $http({
         		method : 'GET',
         		url : $scope.src
         	}).then(function successCallback(response){
         		$scope.data = response.data;

                  console.log($scope.data);
         	},function errorCallback(response){

         	});
         }
             $scope.loadbooks();
         }

	}
}]);