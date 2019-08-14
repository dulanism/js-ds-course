function User(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
};

var user1 = new User('John', 'Smith', 26, 'male')
var user200 = new User('Jill', 'Robinson', 25, 'female');

// the this keyword refers to the object that will be created by the constructor function e.g. User
