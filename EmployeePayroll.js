console.log("Welcome to Employee wage program");
const WAGE_PER_HR = 20;
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const TOTAL_MONTHLY_DAYS = 20;

let empHr;
let monthlyWage = 0;

class Employee{
    constructor(){};
    
    attenfance(){
        for (let day = 0; day < TOTAL_MONTHLY_DAYS; day++){
            let empCheck = Math.floor(Math.random()*3);
            switch(empCheck){
                case IS_FULL_TIME : 
                    empHr = 8;
                    break;
                case IS_PART_TIME : 
                    empHr = 4;
                    break;
                default:
                    empHr = 0;
                    break;
            }
            let daillyWage = empHr * WAGE_PER_HR;
            monthlyWage = monthlyWage + daillyWage; 
        }
        return monthlyWage;
    }
}

let emp = new Employee().attenfance();
console.log(`Montly Wage: ${emp}`);