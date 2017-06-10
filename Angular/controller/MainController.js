

myApp.controller('MainController',['$http','CustomService',function($http,CustomService){
     var main=this; 
     
    this.loadAll = function(){
    	//
          CustomService.getAll()
          .then(function sucessCallback(response){
          	  main.url = response.data;
              console.log(response.data);
          }, function errorCallback(response)
          {
              console.log(response);
          });

    }

this.loadAll;


}]);
