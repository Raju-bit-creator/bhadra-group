// let students=[ "ram ", "shyam"] //this is array
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
//  let value= cart.slice(0, 2).map(e=>{
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
      
        
//     } else {
//         inComplete.push(element)
       
        
//     }
   
    
    
//    }
//    console.log(completed);
//    console.log(inComplete);
   
   

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



//  topic-operators
// arithmetic operator / conditional operator /logical operator
// + , -, /, %, * 
// <, > ,<=, >=, == ,===
// and (&&), or ( || ) Notification(!)

// let a = 5
// let b = "5"
// console.log(a==b); //true loose comparision

// console.log(a===b);// false strict comarision

// let bool = true;
// console.log(a === bool); // Output: false (5 is a number, true is a boolean)

// let exactNum = 5;
// console.log(a === exactNum); // Output: true (same value and type)

// console.log(true === 1);     // Output: false (true is a boolean, 1 is a number)
// console.log(true == 1);      // Output: true (true is coerced to 1)

// console.log(null === undefined);  // Output: false (null and undefined are different types)
// console.log(null == undefined);   // Output: true (loose equality treats them as equivalent)

// console.log('' === false);    // Output: false (empty string and boolean are different types)
// console.log(0 == false);     // Output: true (loose equality coerces '' to false)

//assignment : 1, css hover and span use case 2, position , z-index, 3 before and after 

// let fruits= ["apple", "mango", "pinapple"]
// let breakFast= [...fruits , "bread"]
// console.log(breakFast);

// let a = [1, 2, 3]; console.log(typeof a);
// let x = 5;
// let y = x++;
// console.log(x, y);

// let num = [1, 2, 3, 4]
// let newNum= num.push(5)
// console.log(newNum);

// let popNum =num.pop()
// console.log(popNum);
// console.log(num);

// let str= "1 2 3 4 5"
// let newSrt= str.split(' ')
// console.log(str);
  
//  let countries =[
//     {
//         name: "Nepal",
//         code :"np"
//     },
//     {
//         name: "India",
//         code : "in"
//     },
//     {
//         name: "qatar",
//         code :"qr"
//     },
//     {
//         name: "australia",
//         code :"au"
//     }
//  ]

//   function findCountryCode(countryName) {
//     for (let index = 0; index < countries.length; index++) {
//         let element = countries[index]
//         countryName = countryName.toLowerCase().trim()
//         if (element.name.toLowerCase() == countryName) {
//             console.log(`country code for ${countryName} `, element.code)
//             return
//         }
//     }
    
//  }
//  let num = [1, 2, 3, 4]

//  for (let index = 0; index < num.length; index++) {
//     const element = num[index];
//     console.log(element);
    
    
//  }
// assignment  oct 01 visit theme forest for category design
//  const students =[
//     {
//         name : "Ram",
//         paidStatus: true
//     },
//     {
//         name : "Shyam",
//         paidStatus: false
//     },
//     {
//         name : "Hari",
//         paidStatus: true
//     },
//     {
//         name : "Michelle",
//         paidStatus: false
//     }
//  ]

//   students.forEach(student=>{
//     if (student.paidStatus==true) {
//         console.log(`${student.name} can give exam`);
        
//     } else {
//         console.log(`${student.name} cannot give exam`);
        
//     }
//   })

//   const student1 =[
//     {
//         name : "Ram",
//         paidStatus: true,
//         hasScholarship: false
//     },
//     {
//         name : "Shyam",
//         paidStatus: false,
//         hasScholarship: false
//     },
//     {
//         name : "Hari",
//         paidStatus: true,
//         hasScholarship: false
//     },
//     {
//         name : "Michelle",
//         paidStatus: false,
//         hasScholarship: true
//     }
//  ]

//   student1.forEach(student=>{
//     if (student.paidStatus || student.hasScholarship ) {
//         console.log(`${student.name} can give exam`);
        
//     } else {
//         console.log(`${student.name} cannot give exam`);
        
//     }
//   })

// const data=[
//     {
//         name :"orange",
//         scientificName : "xyz",
//         prices: [
//             {
//                 country:"nepal",
//                 price: 100
//             },
//             {
//                 country:"us",
//                 price: 2
//             },
//             {
//                 country:"canada",
//                 price: 3
//             }
//         ]
//     },
//     {
//         name :"grapes",
//         scientificName : "xyz",
//         prices: [
//             {
//                 country:"nepal",
//                 price: 100
//             },
//             {
//                 country:"us",
//                 price: 2
//             },
//             {
//                 country:"canada",
//                 price: 3
//             }
//         ]
//     }
// ]

// // data[1].prices.forEach((p)=>{
// //     console.log(` price of orange is ${p.price} in ${p.country}`);
    
// // })
// data[1].prices.map((element)=>{
//     console.log(` price of orange is ${element.price} in ${element.country}`);
    
// })

let willRain= true
let probablity = false
let scorchinSun = false
 if (willRain  ||  scorchinSun) {
    console.log("take umbrella");
    
 } else {
    console.log("no need to take umbrella");
    
 }








 



 
 
 
 


