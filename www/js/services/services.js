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

    get: (name) => {
      return users.find(item => item.firstName === name);
    }
  }
})