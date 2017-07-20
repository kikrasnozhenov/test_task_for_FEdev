var PhotosApp = angular.module('PhotosApp');

PhotosApp.controller('photosCtrl', function ($scope, $http){
    $http({
      method: 'GET',
      url: 'db.json'
    }).then(function (success){
        $scope.photos = success.data;
        console.log(success.data, 'res');
    },function (error){
      console.log(error, 'can not get data.');
   });
});
// var PhotosApp = angular.module('PhotosApp');

// PhotosApp.controller('photosCtrl', function ($http){
//     $http.get('db.json').then(function(data) {
//       var vm = this;
//       vm.photos = data;
//     });
// });
// PhotosApp.controller('photosCtrl', function () {
//   var vm = this;
//   vm.photos = 'blablabla';
// });