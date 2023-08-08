var people = {
  name: "Zaman",
  age: "20",
  email: "xaman@gmail.com",
  height: 5,
  color: "brown",
  mobile: 01775434434,
};

// console.log(people);
// console.log(people.color);
var peopleColor = "color";
// console.log(people[peopleColor]);

// Set object value
var updateColor = "Green";
people.color = "yellow";
people["color"] = "red";
people["color"] = updateColor;
// console.log(people);

// Object Looping

for (var peopleKeys in people) {
  // console.log(peopleKeys)
  //   console.log(people[peopleKeys]);
}

// Easy way to get just all of keys of object
console.log(Object.keys(people));
// Easy way to get just all of keys of object
console.log(Object.values(people));
