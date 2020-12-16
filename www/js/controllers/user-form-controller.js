angular.module('ses.user-form-controller', [])

.controller('UserFromCtrl', function($scope, $state, $ionicPopup, Users) {
  $scope.userData = {};

  $scope.saveUser = () => {
    if (!$scope.userData) {
      $ionicPopup.alert({
        title: 'Alert',
        template: 'Please fill all details'
      });
      return;
    }
    let user = {
      firstName: $scope.userData.firstName,
      lastName: $scope.userData.lastName,
      gender: $scope.userData.gender,
      dateOfBirth: new Date($scope.userData.dateOfBirth).toDateString(),
    };
    // Add User
    Users.addUser(user);

    // Show Alert after adding User
    var alertPopup = $ionicPopup.alert({
      title: 'Success',
      template: 'Save an User'
    });

    // Clear User Form after adding an user
    alertPopup.then(() => {
      $scope.userData = {}
    });
  }

  $scope.isFormValid

  $scope.showUsers = () => {
    $state.go('users');
  }
})