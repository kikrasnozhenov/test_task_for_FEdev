var PhotosApp = angular.module('PhotosApp');

PhotosApp.controller('photosCtrl', function ($http){
    $http.get('db.json').then(function(data) {
      var vm = this;
      vm.photos = data;
    });
});
// PhotosApp.controller('photosCtrl', function () {
//   var vm = this;
//   vm.photos = 'blablabla';
// });