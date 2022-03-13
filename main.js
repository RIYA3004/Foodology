// now what we can do is as follows
let Arr_My = ["Fan","Camera",34,null,true];
console.log(Arr_My.length) // here we can have the lenght description that we are being gievnt for it 
Arr_My.pop(); //removes last element
Arr_My.push("NewEle"); //adds new element
Arr_My.shift(); //removes first element 
Arr_My.unshift("Hello"); // adds element to the first index that we are give for the consideration
Arr_My.toString() //converts array to string function that we are being given 
Arr_My.sort() // we can sort the elements that we are taking into consideration 

//STRING METHODS IN JAVASCRIPT:
// the way we can work for it is as follows
let mylovelystring ="Hello I am Riya Suri";
//mylovelystring.splice(1,4); // so it will take the index from 1 to 4
//mylovelystring.replace() // replace one word with another that we are taking into consideration only first occurence is replaces

//let dt = new Date();
//once the new date variable has been created we can do the following 
//console.log(dt.getTime());
//console.log(dt.getFullYear()); // here we can print the values that we have for the consideration

// DOM and understanding the DOM understanding 
document.getElementById('h1tag').style.backgroundColor= "red";

let varfo = document.getElementsByClassName() // in variable 
varfo[0].classList.add('New-Element');
varfo[0].classList.remove('New-Element');
//.innerText used to have access to the Text
// .innerHTML here we can have the consideration of the 

//creating element and appending a child in javascript
let par_create = document.createElement('p');
par_create.innerText='Hello World';
par_create.appendChild(par_create);
// replace a child in DOM -- to replace a child in DOM we can do the following 
par_create.replaceChild(par_create_new,par_create);
// par_create_new is the new child that we have that we want should replace the old child
//.removeChild()


//SET TIMEOUT AND SET INTERVAL THE WAY THEY WORK IS AS FOLLOWS
setTimeout(function_name,5000); // means after 5 milliseconds the function should be executed

// to repeatedly run a function use the setInterval method 
setInterval(function_name,5000); // means the function should get executed after every 5 milliseconds

localStorage.setItem(key,value);
JSON.stringify() // converts to a String for the consideration
JSON.parse() // returns objects considering a valid JSON string 


