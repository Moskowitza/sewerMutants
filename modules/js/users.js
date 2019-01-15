//create an IIFE from the code

// function usersWrapper() {
//     var users = ["Eno", "Toki", "Blue"];
//     function getUsers() {
//       return users;
//     }
//     APP.getUsers = getUsers;
// }
// usersWrapper();

(function() {
  var users = ["Eno", "Toki", "Blue"];
  function getUsers() {
    return users;
  }
  APP.getUsers = getUsers;
})();
