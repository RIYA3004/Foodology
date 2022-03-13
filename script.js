/*'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
///

//1. Making an AJAX Call
const getCountryData = function(country){
const request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/name/${country}');
data = request.send(); // send the request with the get command and store in data
// ajax call is done in background without blocking any other code in the background

request.addEventListener('load',function(){
    //load when the results are available we can have the data
    console.log(this.responseText); // here when the data is available we can have the data for the request that we have 
    // this is just mail but what we have received is JSON
    const data = JSON.parse(this.responseText); //we need to have actual javascript object 
    console.log(data);

    // now we need to display the data that we have so what we can do is as follows
    const html = `
    <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend',html);
  countriesContainer.getElementsByClassName.opacity = 1;
});
};

getCountryData('portugal');
getCountryData('usa');*/
const obj = {name: "John", age:function(){return 30;},city:"New York"};
const myJson = JSON.stringify(obj);
document.getElementById("demo").innerHTML=myJson;
