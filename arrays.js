// function Person(first, last, age, gender, interests) {
//     this.name = {
//       'first': first,
//       'last' : last
//     };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//     this.bio = function() {
//       alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
//     };
//     this.greeting = function() {
//       console.log('Hi! I\'m ' + this.name.first + '.');
//     };
//   }
// var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

// person1.greeting();
// console.log(JSON.stringify(person1.__proto__));
let result = ["a","b","c"];
let guess="c";
function guessArrBuild(el){
  if (result.indexOf(el) === -1) result.push(el)
}
myfunction(guess);
console.log(result);