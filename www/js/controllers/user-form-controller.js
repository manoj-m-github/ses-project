angular.module('ses.user-form-controller', [])

.controller('UserFromCtrl', function($scope, $state) {
  $scope.userData = {};

  $scope.saveUser = () => {
    console.log('Saving User Data' , $scope.userData);
  }

  $scope.showUsers = () => {
    $state.go('users');
  }
})