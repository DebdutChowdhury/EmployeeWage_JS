console.log("Welcome to Employee wage program");
const isAbsent = 0;
let empCheck = Math.floor(Math.random()*10) %2;
class Employee{
    constructor(){};
    
    attenfance(){
        if(empCheck == isAbsent)
        {
            console.log("Employee is Absent");
        }
        else{
            console.log("Employee is present");
        }
        return empCheck;
    }
}

let emp = new Employee().attenfance();
console.log(emp);