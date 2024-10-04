// let willRain= true

// let scorchinSun = false
//  if (willRain) {
//     console.log("take umbrella");
    
    
//  } else {
//     console.log("no need to take umbrella");
    
//  }
let willRain= false
let probablity = true
let scorchinSun = false
 if (willRain ) {
    console.log("take umbrella");
 }
 else if (probablity) {
    console.log('you might to take umbrella');
    
 }

 else {
    console.log("no need to take umbrella");
    
 }

 // ternary operater aka shortcut of if else conditions
 const age = 25
 const canVote =(age>= 18)? ("you  can vote"): "you cannot vote this time"
 console.log(canVote);

 let numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
 let oddNumbers =[]
 let evenNumbers =[]

 numbers.map((number)=>{
    if (number % 2 == 0) {
        evenNumbers.push(number)
    } else {
        oddNumbers.push(number)
    }
 })
 console.log(oddNumbers);
 console.log(evenNumbers);
//  friday assignment 
 let cartItems =[
    {
        name:"ramesh",
        prducts: [
            {title: "watch", price: 1000},
            {title: "earpod", price: 500}
        ]
    },
    {
        name:"dinesh",
        prducts: [
            {title: "watch", price: 1000},
            {title: "earpod", price: 1000},
            {title : "keyboard", price: 1500}
        ]
    },
    {
        name:"jenny",
        prducts: [
            {title: "ear-ring", price: 1000},
        
        ]
    }
 ]
//  output
//  ramesh has ordered of rs 1500
//  dinesh has ordered of rs 3500
//  jenny has ordered of rs 1000
 
 


 
