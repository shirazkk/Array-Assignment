// // //Part 1: Basic Arrays - Product Inventory
var Employee1 = {
    name: "shiraz ali",
    id: 246,
    hoursworked: 12,
    hourlyrate: 50,
    salary: 0
};
var Employee2 = {
    name: "Babar",
    id: 2827,
    hoursworked: 20,
    hourlyrate: 60,
    salary: 0
};
var Employee3 = {
    name: "Arslan",
    id: 338,
    hoursworked: 33,
    hourlyrate: 45,
    salary: 0
};
var Employees = [Employee1, Employee2, Employee3]; //we store all 3 employee object in an array name Employee. 
function calculatesalary(employees) {
    for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
        var employee = employees_1[_i];
        employee.salary = employee.hoursworked * employee.hourlyrate; //here we calculate the employee salary base on his hourly rate or how many hours he worked and the we store employee salary on Employee,salary. 
        if (employee.hoursworked >= 20) { //here we use if condition if employee work 20 hours or more so add 10% on his salary.
            employee.salary = employee.salary + (employee.salary / 100) * 10; //10% increase in Employee salary who work 20 hours or more
        }
        else {
            employee.salary = employee.salary; //else Employee salary will be depend on hours he worked.
        }
    }
    return employees;
}
// //here we console Employee1,2,3 object with their calculated salary in call function 
console.log(calculatesalary(Employees));
// console.log(calculatesalary(Employee1)); 
// console.log(calculatesalary(Employee2));
// console.log(calculatesalary(Employee3));
