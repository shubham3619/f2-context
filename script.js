/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(developer =>{
    if ( developer['profession'] === 'developer' ){
      console.log(developer);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(developer =>{
    if ( developer['profession'] === 'developer'){
      console.log(developer) ;
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const add = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(add);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const update = arr.filter(item =>item.profession!="admin");
  console.log(update);
  arr = update; 
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArr = [
    {id:5,name:"harsh",age:"23",profession:"manager"},
    {id:6,name:"priya",age:"21",profession:"CEO"}
  ]
  let concatenation= arr.concat(newArr);
  console.log(concatenation);
}