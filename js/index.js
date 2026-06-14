// console.log("hello")
// console.log("hello 2")

// a = 10
// console.log(a)
// a = 'hello'
// console.log(a)


// {
//     const a = 'hello'
//     console.log(a)
// }

// console.log(a)

// Datatypes - 1. primitive 2. non-primitive

// primitive - string, number, boolean, null, undefined,

// non-primitive - array and object

let a = 'hello' //string
let b = 10 //number
let c = true // bool
let d = null // null
let e = undefined // undefined

// non - primitive 

let arr = [1, 'hello', true, [ 1 , 2], {name:'hi'}]

let obj = {
    name: 'john',
    age : 30,
}

console.log(5+10)
console.log(10-5)
console.log(5*10)
console.log(10/5)
console.log(10%3)

a= 10 
b = '10'

// == , === , != , !==
// if(a < b || a > b){
//     console.log('a is greater than b')
// }else{
//     console.log('b is greater than a')
// }

if(a === b){
    console.log('a and b are equal')
}else{
    console.log('a and b are not equal')
}

function display(a , b){
    console.log(a , b)  
}

display(5,10)

const funcexp = function(){
    console.log('hello')
}

funcexp()

const arrow = ()=>{
    console.log('arrow function')
}

arrow()