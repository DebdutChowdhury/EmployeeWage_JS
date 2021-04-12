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
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWAgeArr = new Array();
let empDailyWAgeMap;
let dailyCntr = 0;

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

    caldaillyWage(empHr) {
        return empHr * WAGE_PER_HOUR;
    }

    caldaillyHrs(daillyhr){
        let totalEmpHrs = 0;
        totalEmpHrs += daillyhr;
        return totalEmpHrs;
    }

    mapDayWithWage(daillyWage){
        dailyCntr++;
        return dailyCntr + "=" + daillyWage;
    }

    checkWage() {
        while (totalEmpHrs <= MAX_HR_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10) % 3;
            empHr = this.attendance(empCheck);
            totalEmpHrs += empHr;
            empDailyWAgeArr.push(this.caldaillyWage(empHr));
        }

        let empWage = this.caldaillyWage(totalEmpHrs);
        console.log("Total Days: " + totalWorkingDays +" Employee Hours: " + totalEmpHrs +" Emp Wage: "+ empWage);
    
        empDailyWAgeArr.forEach(this.caldaillyHrs);
        console.log(`total working hours are: ${totalEmpHrs}`);

        let empDailyWAgeMap = empDailyWAgeArr.map(this.mapDayWithWage);
        console.log("Total emp wage " +empDailyWAgeMap);        
    }
}

let reault = new Employee().checkWage();