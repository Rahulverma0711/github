let obj={};
console.log(obj);
let person={
    name:"Rahul verma",
    age:21,
    gender:"male"
};
console.log(`hello ${person.name} thank you`);
console.log(person.age);
console.log(person["age"]);//square bracket notatiton
let CaptainAmerica={
    firstname:"Steve",
    lastname:"Rojer",
    friends:["tony","thor"],
    address:{
        state:"NYC",
        country:"America"
    },
    sayHi:function(){
        console.log(`his first name is ${this.firstname}`);
    },

};
console.log(CaptainAmerica.lastname);
CaptainAmerica.sayHi();

//for loop 
// in keyword in JS is used to get the keys from the object

for(let i in CaptainAmerica){
    console.log(i);
    console.log(CaptainAmerica[i]);//dont use dot notataion in this

}