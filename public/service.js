// .service('Photos', ['$http', '$rootScope', function($http, $rootScope) {

//function getPhotos() {
//  $http({method: 'GET', url: '/photos'})
//      .success(function(data, status, headers, config) {
//          photos = data;
//          $rootScope.$broadcast('photos:updated');
//      })
//      .error(function(data, status, headers, config) {
//          console.log(data);
//      });
//}
//getRecipes();
//  service.getAll = function() {
//  return photos;
//  }
//  service.get = function(id) {
//    var photos = null;
//    angular.forEach(photos, function(value) {
//        if (parseInt(value.id) === parseInt(id)) {
//            photos = value;
//            return false;
//        }
//    });
//    return photos;
//  }
//  service.add = function(photos) {
//  $http({method: 'POST', url: '/', data: photos})
//    .success(function(data, status, headers, config) {
//        photos.push(data);
//        $rootScope.$broadcast('recipe:added', data);
//        });
//  }
//  service.update = function(photos) {
//    $http({method: 'PUT', url: '/' + photos.id, data: photos})
//        .success(function(data, status, headers, config) {
//            $rootScope.$broadcast('photos:updated', data);
//        });
//  }
// }]);