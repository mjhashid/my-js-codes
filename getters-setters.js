// How to use getters and setters in an object.

const person = {
  firstName: "Momohjimoh",
  lastName: "Hashid",
  // Using getter to get the value.
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  // Using setter to change the value.
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "Hashid Adinoyi";
console.log(person);
