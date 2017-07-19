// .service('Photos', ['$http', '$rootScope', function($http, $rootScope) {

//   var photos = [];
//   function getPhotos() {
//     $http({method: 'GET', url: '/photos'})
//         .success(function(data, status, headers, config) {
//             photos = data;
//             $rootScope.$broadcast('photos:updated');
//         })
//         .error(function(data, status, headers, config) {
//             console.log(data);
//         });
// }
// getRecipes();
//   service.getAll = function() {
//   return photos;
//   }
//   service.get = function(id) {
//     var photo = null;
//     angular.forEach(photos, function(value) {
//         if (parseInt(value.id) === parseInt(id)) {
//             photo = value;
//             return false;
//         }
//     });
//     return photo;
//   }
//   service.add = function(photo) {
//   $http({method: 'POST', url: '/', data: photo})
//     .success(function(data, status, headers, config) {
//         photos.push(data);
//         $rootScope.$broadcast('photo:added', data);
//         });
//   }
//   service.update = function(photo) {
//     $http({method: 'PUT', url: '/' + photo.id, data: photo})
//         .success(function(data, status, headers, config) {
//             $rootScope.$broadcast('photo:updated', data);
//         });
//   }
// }]);