console.log("Welcome to Employee wage program");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;

let empHr = 0;
let empCheck = Math.floor(Math.random()*10) %3;

class Employee{
    constructor(){};
    
    attenfance(){
        switch(empCheck){
            case IS_FULL_TIME : 
                empHr = FULL_TIME_HOUR;
                break;
            case IS_PART_TIME : 
                empHr = PART_TIME_HOUR;
                break;
            default:
                empHr = 0;
        }
        return empCheck;
    }

    checkDaillyWage(){
        let empWage = empHr * WAGE_PER_HOUR;
        return empWage;
    }
}

let emp = new Employee().attenfance();
let daillywage = new Employee().checkDaillyWage();
console.log(emp);
console.log(`Emp Wage: ${daillywage}`);