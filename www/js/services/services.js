angular.module('ses.services', [])

.factory('Users', () => {
  var users = [];

  return {

    addUser: (user) => {
      if (!user) {
        return;
      }
      users.push(user);
    },

    getAllUsers: () => {
      return users;
    },

    get: (name) => {
      return users.find(item => item.firstName === name);
    }
  }
})