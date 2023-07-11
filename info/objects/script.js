// let user = new Object();


// let user ={
//     name: "John",
//     age:30,
//     "likes birds":true
// };


// user.isAdmin = true;

// delete user.age

//let key = prompt("what is your name: ","");

// console.log(user[key]);


//let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

//alert( bag.apple ); // 5 if fruit="apple"




//fruit = prompt("Which fruit to buy? ","apple");

// let bag = {};

// bag[fruit] = 5;


// function makeuser(name, age) {
//     return{
//         name:name ,
//         age: age 
//     };
// }


// let user2 = makeuser("ankit",21)



// for(key in user2)
//     console.log(key);
// }


// let user = { name: 'John' };

// let admin = user;

//admin.name = 'Pete'; // changed by the "admin" reference

//alert(user.name);

// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// Object.assign(user,permissions1,permissions2);

// alert(user.name);
// alert(user.canEdit);
// alert(user.canView);


// user has a reference to the object
// let user = {
//     name: "John"
//   };

// user = null;


// user = {
//     firstName:"Ilya",
//     sayHi(){
//         let arrow = ()=>alert(this.firstName)
//         arrow();
//     }
// }1
// function User(name){
//     this.name=name;
//     this.isAdmin=false;

// }

// user=new User("jack");
// let user1=new  User("jac")

// function BigUser() {

//     this.name = "John";
  
//     return { name: "Godzilla" };  // <-- returns this object
//   }
  
//   alert( BigUser().name);

// function Calci(){
//     this.read = function(){
//         this.a = +prompt("a?",0)
//         this.b = +prompt("b?",0)
//     };

//     this.sum = function(){
//         return this.a+this.b ;
//     }

//     this.mul = function(){
//         return this.a*this.b ;
//     }
// }

// let cal = new Calci();

// cal.read();

// console.log("Sum= " + cal.sum())
// console.log("Mul= " + cal.mul())

let user = { // belongs to another code
    name: "John"
  };
  
  let id = Symbol("id");
  
  user[id] = 1;
  
  alert( user[id],id.toString());
console.log(id)


