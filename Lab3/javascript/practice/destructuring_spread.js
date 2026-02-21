const students = [
  { name: "Aruzhan", grade: 85 },
  { name: "Dana", grade: 92 },
  { name: "Mira", grade: 70 }
];

// destructuring
const {name, grade} = students[1];
console.log(name);
console.log(grade);

// spread
const newStudent = [{name: "Cipher", grade: 100}]
const allStudents = [...students, ...newStudent];
console.log(allStudents);

// spread
const student3 = students[2];
const miraUpdated = {...student3, grade: 75};
console.log(miraUpdated);