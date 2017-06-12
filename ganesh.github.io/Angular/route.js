

myApp.config(['$routeProvider',function($routeProvider){
      $routeProvider
          .when('/',{

               templateUrl : 'Angular/view/index-view.html',
               controller : 'MainController',
               controllerAs : 'Main'

          })
          .when('/:Value/:Id',{

               templateUrl : 'Angular/view/single-view.html',
               controller : 'singleController',
               controllerAs : 'display'

          })
          .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);