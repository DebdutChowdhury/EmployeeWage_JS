console.log("Welcome to Employee wage program");
const wagePrHr = 20;
const hrInDay = 8;
let empCheck = Math.floor(Math.random()*10) %2;

class Employee{
    constructor(){};
    
    attenfance(){
        if(empCheck == 1)
        {
            console.log("Employee is Absent");
        }
        else{
            console.log("Employee is present");
        }
        return empCheck;
    }

    checkDaillyWage(){
        let daillyWage = wagePrHr * hrInDay * empCheck;
        return daillyWage;
    }
}

let emp = new Employee().checkDaillyWage();
console.log(emp);