// let students=[ "ram ", "shyam", "hari" ] //this is array
// console.log( students);


// let student=[
//     {
//         name: "ramesh",
//         roll: 20
//     },
//     {
//         name: "ram",
//         roll: 10
//     },
//     {
//         name: "shyam",
//         roll: 5
//     }
// ]
// console.log(students);
// console.log(student);

// let cart=[
//     {
//         price: 20,
//         qty:3
//     },
//     {
//         price: 30,
//         qty:4
//     },
//     {
//         price: 40,
//         qty:5
//     }
// ]
//  const total= cart.reduce((acc, curr)=>
// acc + curr.price * curr.qty, 0
//  )
//  console.log("your total is: ", total);
//  let value= cart.slice(0, 3).map(e=>{
//     return e.qty
//  })
//  console.log("this is all prices:", value);

//  let courses= [
//     {
//         class: "mern",
//         status: true
//     },
//     {
//         class: "python",
//         status: false
//     },
//     {
//         class: "php",
//         status: true
//     },
//     {
//         class: "c++",
//         status: false
//     }
//  ]
//   let completed=[]
//   let inComplete=[]
//    for (let index = 0; index < courses.length; index++) {
//     const element = courses[index];
//     if (element.status==true) {
//         completed.push(element)
//         console.log(completed);
        
//     } else {
        
//     }
    
//    }

// let  fruits =["apple", "mango", "orange", "grapes"]
// //  const popedFruit = fruits.pop()
// //  console.log(popedFruit);
// //  console.log(fruits);
// const fruit1= fruits.forEach(function (fruit , index) {
//     console.log(fruit, index);
    
    
// })

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
//  const filterNumber= numbers.filter(function (num) {
//     return num> 3
    
//  })
//  console.log( filterNumber);

//  let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8]
//  const foundNumber= numbers1.find(function (num) {
//     return num>2
//  })
//  console.log(foundNumber);

//  let sentence ="there/is/elephant."
//  const splitSentence= sentence.split("/")
//  console.log(splitSentence);
 
 

let button = document.getElementById("button")
button.addEventListener("click", function () {
let conf=  confirm("are you sure?")
console.log(conf);

})




 
 
 
 


