var person = {
    name: {
        first: 'Bob',
        last: 'Smith'
    },
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function () {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function () {
        alert('Hi! I\'m ' + this.name[0] + '.');
    }
};
var myDataName = 'height';
var myDataValue = '1.75m';
person[myDataName] = myDataValue;
person.age = 45;
person['name']['last'] = 'Cratchit';

console.log(person.age)
console.log(person['age'])

console.log(person['name']['first'])
person['eyes'] = 'hazel';
person.farewell = function() { console.log("Bye everybody!"); }
console.log(person['eyes'])
person.farewell()

console.log(person.height)

var person1 = {
    name: 'Chris',
    greeting: function() {
      alert('Hi! I\'m ' + this.name + '.');
    }
  }
  
  var person2 = {
    name: 'Brian',
    greeting: function() {
      alert('Hi! I\'m ' + this.name + '.');
    }
  }
  var myString="cantalope";
 console.log(myString.split(""));