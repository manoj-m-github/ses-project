angular.module('ses.user-form-controller', [])

.controller('UserFromCtrl', function($scope) {
  $scope.userData = {};

  $scope.saveUser = () => {
    console.log('Saving User Data' , $scope.userData);
  }
})