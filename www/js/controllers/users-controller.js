angular.module('ses.users-controller', [])

.controller('UsersCtrl', function($scope, $state, Users) {
  $scope.users = Users.getAllUsers();

  $scope.showUserDetail = (user) => {
    $state.go('user-detail', {
      name: user.firstName
    });
  }
})