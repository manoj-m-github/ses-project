angular.module('ses.services', [])

.factory('Users', () => {
  var users = [{
    firstName: 'John',
    lastName: 'Mathew',
    gender: 'Male',
    dateOfBirth: 'Some Date'
  }];

  return {

    addUser: (user) => {
      if (!user) {
        return;
      }
      this.users.push(user);
    },

    getAllUsers: () => {
      return users;
    },

    get: (name) => {
      return users.find(item => item.firstName === name);
    }
  }
})