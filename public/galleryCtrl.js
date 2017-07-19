var PhotosApp = angular.module('PhotosApp');

PhotosApp.controller('photosCtrl', function ($http){
    $http.get('db.json').success(function(data) {
      vm.url = data;
    });
});
// PhotosApp.controller('photosCtrl', function () {
//   var vm = this;
//   vm.myTask = 'blablabla';
// });