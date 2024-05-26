                                    //Part 1: Basic Arrays - Product Inventory

type product = {
  name: string;
  price: number;
  inventry: {
    stock: number;
    colorOptions: string[];
  };
};

let product1: product = {
  name: "Polo T-shirt",
  price: 1000,
  inventry: {
    stock: 300,
    colorOptions: ["red", "blue", "white"],
  },
};

let product2 = {
  name: "Levis T-shirt",
  price: 1500,
  inventry: {
    stock: 500,
    colorOptions: ["red", "white", "black"],
  },
};
let product3 = {
  name: "Nike T-shirt",
  price: 999,
  inventry: {
    stock: 100,
    colorOptions: ["green", "blue", "yellow"],
  },
};

let products = [product1, product2, product3]; //we store 3 objects product 1,2 and 3 in new array products

function changecolor(products: product, newcolor) {
  //function get two param products which is our 3 objects products 1,2,3 and newcolor
  products.inventry.colorOptions = newcolor; //change the coloroptions of objects to newcolor
  //now we use if/else to update the price of t-shirts depend on each color
  if (newcolor == "red") {
    products.price = products.price + (products.price / 100) * 10; //10% increase price
  } else if (newcolor === "blue") {
    products.price = products.price + (products.price / 100) * 10; //10% decrease price
  } else if (newcolor === "white") {
    products.price = products.price + (products.price / 100) * 5; //5% increase price
  } else if (newcolor === "black") {
    products.price = products.price + (products.price / 100) * 30; //30% increase price
  } else if (newcolor === "green") {
    products.price = products.price + (products.price / 100) * 20; //20% decrease price
  } else if (newcolor === "yellow") {
    products.price = products.price + (products.price / 100) * 25; //25% decrese price
  }
  return products;
}
//product 1 available colors and updated price
console.log(changecolor(product1, "red"));
console.log(changecolor(product1, "blue"));
console.log(changecolor(product1, "white"));

//product 2 available colors and updated price
console.log(changecolor(product2, "red"));
console.log(changecolor(product2, "white"));
console.log(changecolor(product2, "black"));

//product 3 available colors and updated price
console.log(changecolor(product3, "green"));
console.log(changecolor(product3, "blue"));
console.log(changecolor(product3, "yellow"));



                              //Part 2: Multi-Dimensional Arrays and Tuples - Student Grades


type student = {
  name: string;
  class: string;
  grades: number[]; 
};

let student1:student = {
  name: "Shiraz Ali",
  class: "1st-year",
  grades: [80, 92, 77, 66, 88], //grades of shiraz ali
};

let student2:student = {
    name: "Hassan Ali",
    class: "1st-year",
    grades: [82, 62, 87, 66, 84], //grades of Hassan Ali
  };

  let student3:student= {
    name: "Zabrain khan",
    class: "1st-year",
    grades: [66, 97, 71, 65, 58], //grades of Zabrain khan
  };
//store all objects in array students
  let students=[student1,student2,student3] 

  function calculateAverageGrade(grades:number[]){ 
    let totalGrades=grades.reduce((sum,total)=>sum+total); // Calculate the sum of all grades
    return totalGrades/grades.length //return the average grade
  }
  students.forEach(students=>{
    let averageGrades=calculateAverageGrade(students.grades) // Calculate average grade for the current student
    // Log the student's name and average grade.
    console.log(`student Name:${student1.name} Average Grades:${averageGrades.toFixed(1)}%`);
    console.log(`student Name:${student2.name} Average Grades:${averageGrades.toFixed(1)}%`);
    console.log(`student Name:${student3.name} Average Grades:${averageGrades.toFixed(1)}%`);

  })


                             // Part 3: Array with Types and Indexing - Employee Salaries

type Employee = {
  name: string; 
  id: number; 
  hoursworked: number;
  hourlyrate: number;
  salary: number;
};

let Employee1: Employee = {
  name: "shiraz ali",
  id: 246,
  hoursworked: 12,
  hourlyrate: 50,
  salary: 0,
};
let Employee2: Employee = {
  name: "Babar",
  id: 2827,
  hoursworked: 20,
  hourlyrate: 60,
  salary: 0,
};
let Employee3: Employee = {
  name: "Arslan",
  id: 338,
  hoursworked: 33,
  hourlyrate: 45,
  salary: 0,
};
let Employees: Employee[] = [Employee1, Employee2, Employee3]; //we store all 3 employee object in an array name Employees.

function calculatesalary(Employees: Employee) {
  Employees.salary = Employees.hoursworked * Employees.hourlyrate; //calculate the base salary base on employee hours he worked and his hourly rate.

  if (Employees.hoursworked >= 20) {
    //here we use if condition if employee work 20 hours or more so add 10% on his salary.
    Employees.salary = Employees.salary + (Employees.salary / 100) * 10; //Add 10% to the base salary
  }

  return Employees;
}

// Calculate and log the salary for each employee individually
console.log(calculatesalary(Employee1));
console.log(calculatesalary(Employee2));
console.log(calculatesalary(Employee3));
