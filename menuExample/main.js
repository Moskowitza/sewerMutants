import { users } from './users.js';
import { returnUser } from './functions.js';

users.forEach(element => {
  console.log(returnUser(element));
});
