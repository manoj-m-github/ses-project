angular.module('ses.user-controller', [])

.controller('UserCtrl', function($scope, $stateParams, Users) {
  $scope.user = Users.get($stateParams.name);
})