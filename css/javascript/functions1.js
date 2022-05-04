//functions are the building blocks of a program 
//bar bar likhny ki need nhi hoti aik dfa likho or jb zaroorat ho usy call krlo
//function ko call krna zaroori hota hai


// let myname = "ushba";
// let name1 = "aqsa";
// let name2 = "maryam";
// let name3 = "nimra";
// let greettext = "Good Morning!"

// function greet(myname){
//     console.log(myname + " is a good girl");
// }

// greet(myname);
// greet(name1);
// greet(name2);
// greet(name3);

// function greet(greettext,myname){
//     console.log(greettext +  myname);

// }
// greet(greettext,myname);
// greet(greettext,name1);
// greet(greettext,name2);
// greet(greettext,name3);


//return value

// function sum(a,b,c){
//     d = a + b + c;
//     return d;
// }
// let returnvalue = sum(1,2,3);
// console.log(returnvalue);

//Quiz

function greater(a,b){
    if(a>b){
        console.log("a is greater than b");
        return a;
    }
    else{
        console.log("b is greater than a");
        return b;
    }
}
let returnvalue = greater(5,2);
console.log(" The value is "+ returnvalue);
