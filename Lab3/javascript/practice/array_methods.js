const students = [
  { name: "Aruzhan", grade: 85 },
  { name: "Dana", grade: 92 },
  { name: "Mira", grade: 70 }
];

// map
const names = students.map(student => student.name);

// filter
const high_grades = students.filter(student => student.grade > 80);

// find
const found = students.find(student => student.name === "Mira");

console.log(names);
console.log(high_grades);
console.log(found);