function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.name = function() {
    return this.firstName + " " + this.lastName;
  };
  this.changeName = function (n) {
    this.lastName = n;
  };
}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

myFather.nationality = "English";//only to this object

const father_name = myFather.name();
myMother.changeName("singh");