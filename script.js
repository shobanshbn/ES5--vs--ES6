//  SPREAD OPERATOR 

// const arr =["guvi","geek","fsd"]
// console.log(...arr);

/*
const arr =["bob","alice"]
const arr1 = ["leo","smith"]
const arr2 = [...arr,...arr1]
console.log(arr2);
*/

// REST PARAMETER
/*
function test (...c){
    let even =[];
    for(let i=0; i<c.length; i++){
        if(c[i]%2===0){
            even.push(c[i])
        }
    }
    return even
}
console.log(test(10,11,15,16,14,19,20));
*/

//   ARRAY DESTRUCTURE

// const arr = ["🍎","🍊","🍓","🍒"]

//* without destrucure
/*
 const apple = arr[0]
 const orange = arr[1]
 const strawberry = arr[2]
 const berry = arr[3]

 console.log(apple,orange,strawberry, berry);
 */
// * WITH DESTRUCTURE

//syntax :- const/let [variblename]= arrayname;
/*
const [apple,orange,strawberry,berry] = arr

console.log(apple,orange,strawberry,berry);
*/

// TASK
/*
const array =["🍌","🍉","🍋","🥕"]
const [banana,melon,lemon,carrot] = array
console.log(banana,melon,lemon,carrot);
*/

//  ADD ELEMENT
/*
const array =["🍌","🍉","🍋","🥕"]
const [banana,melon,lemon,carrot,apple="🍎"] = array
console.log(banana,melon,lemon,carrot,apple);
*/

// OBJECT DESTRUCTURING


/*
let obj ={
    names:"John",
    age :30,
    address:{
        city:"Chennai",
        state: "Tamilnadu"
    }
}
*/

//* without destrucure
/*
console.log(obj.names);
console.log(obj.age);
console.log(obj.address.city);
console.log(obj.address.state);
*/


// * WITH DESTRUCTURE

// syntax:- const {keyname} = objectname;
/*
const {names,age,address:{city,state}} = obj;
console.log(names,age,city,state);
*/

// ADD ELEMENT
/*
const {names,age,address:{city,state},phone=987456321} = obj;
console.log(names,age,city,state,phone);
*/

// SESSION TASK
/*
const person = {
    names :"shoban",
    age :29,
    gender :"Male",
    address:{
        city:"Chennai",
        state:"Tamilnadu",
        country:"India"
    },
    phone: 9874563210
}

const {names,age,gender,address:{city,state,country},phone,email="shobanshbn@gmail.com"} = person;
console.log(names,age,gender,city,state,country,phone,email);
*/

// ARRAY OF OBJECT DESTRUTURE

//* without destrucure

/*
const shop =[
    {
        item:"rice",
        rate:100,
        category:"grains"
    },
      {
        item:"apple",
        rate:90,
        category:"fruits"
    },
      {
        item:"carrot",
        rate:50,
        category:"vegtables"
    }
]
/*
console.log(shop);
console.log(shop[0].item,shop[0].rate,shop[0].category);
console.log(shop[1].item,shop[1].rate,shop[1].category);
console.log(shop[2].item,shop[2].rate,shop[2].category);
*/

// * WITH DESTRUCTURE

// syntax:- const [{keyname}] = array of objectname

// const [{item,rate,category}] = shop;
// // console.log(item,rate,category);
// for(let i=0; i<shop.length;i++){
//     console.log(shop[i]);
    
// }

//  WE CAN USE ANY FOR LOOP
 
//   OBJECT OF ARRAY

// let obj ={
//     names :"shoban",
//     age :29,
//     skills:["html","css","javascript"]
// }

/*console.log(obj.names,obj.age);
for(let i=0; i<obj.skills.length; i++){
    console.log(obj.skills[i]);
    
}
*/

// WITH DESTRUTURE

// syntax:- 

// const {names,age,skills:[skill1,skill2,skill3]} = obj

// console.log(names,age,skill1,skill2,skill3);


// SESSION TASK
/*

const person ={
    names :"shoban",
    age:29,
    gender :"Male",
    address:["chennai","Tamilnadu","India"],
    skills :["htnml","css","javascript"]
}

const {names,age,gender,address:[add1,add2,add3],skills:[skill1,skill2,skill3]} = person;

console.log(names,age,gender,add1,add2,add3,skill1,skill2,skill3);
*/

// OBJECT SHORTHAND PROPERTY

// NORMAL

// let obj ={
//     id:1,
//     order : "pizza"
// }

// console.log(obj.id,obj.order);

// SHORTHAND PROPERTY

/*

 const id=1;
 const order ="pizza";
const type ="farmhouse";
const toppings = "dblcheese";

let obj = {
    id,
    order,
    type,
    toppings
}

console.log(obj);
*/


