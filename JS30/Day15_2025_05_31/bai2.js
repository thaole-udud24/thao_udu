class Employee{
    constructor(name,position,baseSalarty,woikingDays){
        this.name=name;
        this.position=position;
        this.baseSalary=baseSalary;
        this.workingDays=workingDays;
    }
    calculateSalary(){
        return this.baseSalary * this.workingDays;
    }
    show(){
        console.log(`Name:${this.name},Position:${this.position},Base Salary:${this.baseSalary},Working Days:${this.workingDays}`)
    }
}
const e1=new Employee("nguyen van","dev",1000,20);
e1.show();