"use strict"
// console.log("I’m JavaScript!")

// alert("Hello"); alert("World");

// console.log("hello")
// console.log("world");

// alert("hello");

// [1,3].forEach(alert);




// let a = 5;
// a= 6;
// console.log(a)

// let hello = 'Hello world!';

// let message;


// message = hello;

// console.log(hello)
// console.log(message)

// hello= "wolrd"

// console.log(hello)
// console.log(message)

// let $ = 2;
// let _ = 3;




// let a = "6"/3
// console.log(a)

//console.log(9007199254740991 + 1); // 9007199254740992
//console.log(9007199254740991 + 2); // 9007199254740992

// console.log(`${a}`)
// console.log(typeof a)

// let promt= prompt("cajofno" , ["default"]);
// console.log(promt)






// let a = 1;
// let b = 2;
// let c;
// let c = 3 - (a = b + 1);
// console.log(a = b + 1);
// alert( a ); // 3
// alert( c ); // 0


// for (a=1 , b=3 , c=a*b; a<10; a++){
//     console.log("c="+c);
//     console.log("b="+b);
// }

// a,b = (1 + 2, 3 + 4);
// console.log(a)
// console.log(b)

// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++;
// console.log(c)
// console.log(" \t \n" - 2);
// alert( null > 0 );  // (1) false
// alert( null == 0 ); // (2) false
// alert( null >= 0 ); // (3) true


// let age = prompt('age?',18);

// let  message = (age<3) ? "hey 3+" : 
//                (age<18)? "hey 18+":
//                (age<100)? "Greetings":
//                "what an unusaual age";

// console.log(message);

// if (age < 3) {
//     message = 'Hi, baby!';
//   } else if (age < 18) {
//     message = 'Hello!';
//   } else if (age < 100) {
//     message = 'Greetings!';
//   } else {
//     message = 'What an unusual age!';
//   }

//   console.log(message);

//   let result = (a+b<4)?"Below":"Over";

//   message = (login="Employee")?"Hello":
//             (login="Director")?"Greeting":
//             (login="")? "No Login" :
//             "";
            


// find the first true value 
// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";

// console.log(firstName||lastName||nickName||"Anonymous")


//  AND “&&” finds the first falsy value

// Precedence of AND && is higher than OR ||
// + = OR
// * = AND 

// alert( alert(1) && alert(2) && alert(3) );

//alert( alert(1) || alert(2) || alert(3)||3 );

//console.log(typeof(alert(2)));

// let user;
// let result = (user??"no") ;

// result = (user!== null && user!==undefined) ? user:"not";



// let height = null;
// let width = null;

// // important: use parentheses
// let area = (height ?? 100) * (width ?? 50);

// alert(area); // 5000
// // without parentheses
// area = height ?? 100 * width ?? 50;
// alert(area)
// // ...works this way (not what we want):
// area = height ?? (100 * width) ?? 50;
// alert(area)