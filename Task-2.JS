// 1. Welcome Program
let userName = prompt("Enter your name:");
alert("Hi " + userName + ", Welcome to JavaScript Training.");
console.log("Hi " + userName + ", Welcome to JavaScript Training.");


// 2. Console Methods Practice
console.log(500);
console.warn(500);
console.error(500);
console.clear();


// 3. Data Type Identification
let str = "JavaScript";
let num = 100;
let isActive = true;
let notDefined;
let emptyValue = null;

console.log(str, typeof str);
console.log(num, typeof num);
console.log(isActive, typeof isActive);
console.log(notDefined, typeof notDefined);
console.log(emptyValue, typeof emptyValue);


// 4. Arithmetic Operations
let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);


// 5. Increment & Decrement
let x = 10;

console.log("Pre-Increment:", ++x);
console.log("Post-Increment:", x++);
console.log("After Post-Increment:", x);

console.log("Pre-Decrement:", --x);
console.log("Post-Decrement:", x--);
console.log("After Post-Decrement:", x);


// 6. Assignment Operators
let numValue = 10;

numValue += 5;
console.log("After += :", numValue);

numValue -= 3;
console.log("After -= :", numValue);

numValue *= 2;
console.log("After *= :", numValue);

numValue /= 4;
console.log("After /= :", numValue);

numValue %= 3;
console.log("After %= :", numValue);


// 7. Array Access
let technologies = ["HTML", "CSS", "JavaScript", "React"];

console.log("First Element:", technologies[0]);
console.log("Second Element:", technologies[1]);
console.log("Last Element:", technologies[technologies.length - 1]);
console.log("Total Elements:", technologies.length);


// 8. Modify Array
technologies.push("Node.js");
technologies.pop();
console.log("Updated Array:", technologies);


// 9. Student Object
let student = {
  name: "Sameer",
  age: 22,
  course: "JavaScript",
  city: "Hyderabad"
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);
console.log("City:", student.city);


// 10. Nested Object Practice
let company = {
  companyName: "Tech Solutions",
  trainer: {
    trainerName: "Rahul",
    subject: "JavaScript"
  }
};

console.log("Company Name:", company.companyName);
console.log("Trainer Name:", company.trainer.trainerName);
console.log("Trainer Subject:", company.trainer.subject);
