//ForEach method is a javascript  function that allow you to execute a block code
//for each element in array. 

//The forEach metrhod() call function(a callback function for each element). 
//syntax array.foreach(function, value, index, arrary), this.value;

const numbers = [2, 3, 4, 5, 6];
numbers.forEach(function (num) {
    console.log(num*2)
});

//logging array element.
//logging of an array helps me to understand the content and structure of my data,
//making it easier, test, debug application.
const fruits = ["Apple", "Orange", "Banana"];
fruits.forEach(function(fruits) {
    console.log(fruits)
});
//document.getElementById("Superdamidev").innerHTML = fruits;

const names = ["Dami", "Wuyi", "Ade"];
names.forEach(names => console.log(names));
//document.getElementById("Superdamidev").innerHTML = names;
console.log(names);