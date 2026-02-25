var l=10
var l=20
console.log(l)//this not an error

let m=10
//let m=20 //this is an error because we can't declare a variable with the same name using let
console.log(m)

const n=10
//n=20 //this is an error because we can't reassign a value to a constant variable
console.log(n)

//loops
for(let i=0;i<5;i++){
    console.log(i)

}
console.log("*************************")
while(m>0){
    console.log(m)
    m--
}
m=-1
do{
    console.log(m)
    m--
}while(m>0)

let arr=[1,2,3,4,5]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
console.log("*************************")
for(let element of arr){
    console.log(element)
}
console.log("*************************")
arr.forEach(element => {
    console.log(element)
});

function add(a,b){
    return a+b
}
console.log(add(5,10))

const add2=(a,b)=>{
    return a+b
}
console.log(add2(5,10))

obj={
    name:"John",
    age:30,
    greet:function(){
        console.log("Hello, my name is "+this.name)
    }
}
console.log(obj.name)
obj.greet()     

obj2={
    name:"Jane",
    age:25,
    owners:{
        owner1:"Alice",
        owner2:"Bob"
    }
}
console.log(obj2.owners.owner1)

//oops concepts
class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    greet(){
        console.log("Hello, my name is "+this.name)
    }
}
const person1=new Person("John",30)
console.log(person1.name)
person1.greet()

class Student extends Person{
    constructor(name,age,grade){
        super(name,age)
        this.grade=grade
    }
    study(){
        console.log(this.name+" is studying")
    }
}
const student1=new Student("Jane",25,"A")
console.log(student1.name)
student1.greet()
student1.study()

//polymorphism
class Animal{
    speak(){
        console.log("Animal makes a sound")
    }
}
class Dog extends Animal{
    speak(){
        console.log("Dog barks")
    }
}
class Cat extends Animal{
    speak(){
        console.log("Cat meows")
    }
}
const dog1=new Dog()
const cat1=new Cat()
dog1.speak()
cat1.speak()
    
const animals=[new Dog(),new Cat()]
animals.forEach(animal=>{
    animal.speak()
})
