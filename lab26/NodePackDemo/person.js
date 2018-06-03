function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.show=function(){
    console.log("i'm",this.name,",i'm ",this.age,"years old!");
}
module.exports=Person;


// function Student(name,age){
//     this.name=name;
//     this.age=age;
// }
// Student.prototype.show=function(){
//     console.log("i'm",this.name,",i'm ",this.age,"years old!");
// }
// Student.prototype.point=function(){
//     console.log(this.name+"'s main task is to learn");
// }
// module.exports=Student;