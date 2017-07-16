angular.module('PhotosApp', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "gallery.html"
    })
    .when("/photos", {
      templateUrl : "/photos.html",
      controller: "photosCtrl",
      controllerAs: "photosCtrl"
    })
    .when("/contacts", {
      templateUrl : "/contacts.html",
    })
    .otherwise({ 
          redirectTo: '/'
      });
}]);
