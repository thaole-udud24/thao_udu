class Student{
    constructor(id,name,email,age){
        this.id=id;
        this.name=name;
        this.email=email;
        this.age=age;
    }
    displayInfo(){
        console.log(`ID: ${this.id},Name:${this.name},Email:${this.email},Age:${this.age}`);

    }
    
}
const student1=new Student(1,"le th thao","lethithao@gmail.com",19);
const student2=new Student(2,"le thi thu","thule@gmail.com",19);
student1.displayInfo();
student2.displayInfo();