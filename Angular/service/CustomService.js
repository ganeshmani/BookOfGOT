


myApp.factory('CustomService',function CustomFactory($http){
   var customApi = {}
   var api = 'https://www.anapioficeandfire.com/api'

   customApi.getAll = function(){
       return $http({
          method : 'GET',
          url : api,
       });
   } 

   customApi.loadUrl = function(value,id){
   	  return $http({
          method : 'GET',
          url : api+'/'+value+'/'+id,
   	  });
   }

   customApi.customdata = function(url)
   {
    return $http({
      method : 'GET',
      url : url,
    });
   }

   return customApi;

});