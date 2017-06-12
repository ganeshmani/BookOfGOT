

myApp.controller('singleController',['$http','$routeParams','CustomService',function($http,$routeParams,CustomService){


   var main = this;
   this.bookcharacters = [];
   this.characterbooks = [];
   this.id = $routeParams.Id;
   this.value = $routeParams.Value;

  this.load = function()
  {
  	   CustomService.loadUrl(main.value,main.id)
          .then(function sucessCallback(response){
          	  main.url = response.data;
            

              if(main.value == 'books')
              {
                var characterArrayLength = main.url.characters.length;
                for(var i =0;i<characterArrayLength;i++)
                {

                  CustomService.customdata(main.url.characters[i])
                  .then(function sucessCallback(response){

                   main.bookcharacters.push(response.data);
                   //console.log(main.bookcharacters);

                  },function errorCallback(response){

                  });
                }
              }
              else if(main.value == 'characters')
              {
                var bookArrayLength = main.url.books.length;
                for(var j =0;j<bookArrayLength;j++)
                {

                  CustomService.customdata(main.url.books[j])
                  .then(function sucessCallback(response){

                   main.characterbooks.push(response.data);
                   //console.log(main.characterbooks);

                  },function errorCallback(response){

                  });
                }

              }

          }, function errorCallback(response)
          {
              console.log(response);
          });

      

   }


}]);