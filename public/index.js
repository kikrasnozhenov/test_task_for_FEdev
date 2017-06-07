var app = angular.module('PhotosApp', ['ngRoute'])

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "gallery.html"
    })
    .when("/photos", {
      templateUrl : "/photos.html"
    })
    .otherwise({ 
          redirectTo: '/'
      });
}]);
