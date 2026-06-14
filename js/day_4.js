function display(a,b){
    console.log(a,b())
}

display(1,()=>{
    return 'hello'  
})


//Schedulers

var setI = setInterval(()=>{
    console.log('hello')
},1000)

setTimeout(()=>{
    console.log("setTimeout")

    clearInterval(setI)
},5000)