class Company {
    constructor() {
        this.departments = {};
        this.departmentSalaryData = {}
    }
    addEmployee(name, salary, position, department) {

        if (!name || !salary || !position || !department) {
            throw new Error('Invalid input!')
        }
        if (salary < 0) {
            throw new Error('Invalid input!')
        }
        let employee = { name, salary, position };

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
            this.departmentSalaryData[department] = {
                sumSalary:0,
                avrSalary:0
            }
        }

        this.departments[department].push(employee);
        this.departmentSalaryData[department].sumSalary += salary;
        this.departmentSalaryData[department].avrSalary =
        this.departmentSalaryData[department].sumSalary / this.departments[department].length

        return `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`
    }

    bestDepartment() {
        let [bestDepName, salaryData] = Object.entries(this.departmentSalaryData).sort((a, b) => b[1].avrSalary - a[1].avrSalary)[0];
        let buff = `Best Department is: ${bestDepName}\n`;
       
        buff += `Average salary: ${salaryData.avrSalary.toFixed(2)}\n`;

        this.departments[bestDepName].sort((objA, objB) => {
            return objB.salary - objA.salary ||
                objA.name.localeCompare(objB.name)
        }).forEach(element => {
            return buff += `${element.name} ${element.salary} ${element.position}\n`
        });
        return buff.trim()

    }



}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());


