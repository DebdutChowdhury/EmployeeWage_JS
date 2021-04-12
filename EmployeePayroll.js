console.log("Welcome to Employee wage program");

const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;
const WORKING_HOURS = 20;
const MAX_HR_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
const IS_PART_TIME = 1;

let empHr = 0;

class Employee {
    constructor() { };  

    attendance(empCheck) {
        switch (empCheck) {
            case this.IS_PART_TIME:
                empHr = this.PART_TIME_HOUR;
                break;
            case this.IS_FULL_TIME:
                empHr = this.FULL_TIME_HOUR;
                break;
            default:
                empHr = 0;
                break;
        }
        return empCheck;
    }

    daillyWage(empHr) {
        return empHr * WAGE_PER_HOUR;
    }

    checkWage() {
        let totalEmpHrs = 0;
        let totalWorkingDays = 0;
        let empDailyWAgeArr = new Array();
        let empDailyWAgeMap = new Map();
        while (totalEmpHrs <= MAX_HR_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10) % 3;
            empHr = this.attendance(empCheck);
            totalEmpHrs += empHr;
            empDailyWAgeArr.push(this.daillyWage(totalEmpHrs));
            empDailyWAgeMap.set(totalWorkingDays, this.daillyWage(empHr))
        }

        console.log(empDailyWAgeMap);
        let empWage = this.daillyWage(totalEmpHrs);
        console.log("Total Days: " + totalWorkingDays +" Employee Hours: " + totalEmpHrs +" Emp Wage: "+ empWage);
        let totalWages = (totalWage,dailyWage) => totalWage + dailyWage;
        console.log("Emp Wage with reduce " + Array.from(empDailyWAgeMap.values()).reduce(totalWages,0));    
    }
}

let reault = new Employee().checkWage();