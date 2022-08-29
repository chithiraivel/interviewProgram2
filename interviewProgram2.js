// let a = ["many", "things", "mahi", "rahul", "vel"];
// let c=[]

// for (let i = 0; i < a.length; i++) {
//   let b = a[i]; 
//   let y =[]
//   for (let j = 0; j < b.length; j++) {
  
//     if(b[j] == 'a' || b[j] == 'e' || b[j] == 'i' || b[j] == 'o' || b[j] == 'u' ){
        
//         y.push(b[j])
//     }
//   }
//   if(y.length == 2){
//     c.push(b)
// }
// }
// console.log(c);



// let c =[];
// let d =[]
// for(let i=1;i<=200;i++){

//     if(i%8==0){

//         let a =i
//         let b = i %10;
//          a = Math.floor(a/10);

//          if(a > b){
//             c.push(i);
//          }
//          else{
//             d.push(i);
//          }
//     }
// }
// console.log(d);
// console.log(c);



// var a = [3,5,7,3,6,8]
// var b =[9,5,2,5,6,7,56,76,34543]

// var c =a.concat(b)
// var d = c.sort(  (x,y) => {
//     console.log(x);
//     console.log(y);
//  return x-y;
// })
// console.log(d);

var a = [{name:'a' , age:44},{name:'b' , age:34},{name:'c' , age:44},{name:'d' , age:54}]

var c =a.sort( (x,y) => {
    return x.age-y.age;
})

console.log(c);