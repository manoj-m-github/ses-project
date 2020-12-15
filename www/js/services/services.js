angular.module('ses.services', [])

.factory('Users', () => {
  var users = [{
    firstName: 'John',
    lastName: 'Mathew',
    gender: 'Male',
    dateOfBirth: 'Some Date'
  }];

  addUser = (user) => {
    console.log('Saving New User');
    this.users.push(user);
  }

  return {
    get: (name) => {
      return users.find(item => item.firstName === name);
    }
  }
})