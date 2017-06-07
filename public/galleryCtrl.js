var app = angular.module('app', ['ngRoute']);

app.controller('photosCtrl', photosCtrl);

photosCtrl.$inject = ['Photos'];

var app = angular.module('app', ['ngRoute']);
app.controller('photosCtrl', photosCtrl);

photosCtrl.$inject = ['Photos'];
function photosCtrl(Photos) {
  var vm = this;
  this.addPhoto = function() {
  };
}