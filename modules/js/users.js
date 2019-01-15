function usersWrapper() {
  var users = ["Eno", "Toki", "Blue"];
  function getUsers() {
    return users;
  }
  APP.getUsers = getUsers;
}
usersWrapper();
