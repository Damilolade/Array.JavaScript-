// Array is a special variable that can stored more value under a single name.

const technologies = ["iphone", "Samsung", "infinix", "Tecno"];
console.log(technologies);

//.push is used to add a value to an array at the end.

technologies.push("itel");
console.log(technologies);

//.splice() is a another features in javascript that use to remove value from an array.

technologies.splice(2, 3, 2);
console.log(technologies);

// access a value in an Array.
var technologies1 = ["iphone", "Samsung", "infinix", "Tecno"];
console.log(technologies1[2]);

// changing of value in an array.

technologies1[3] = "Xiaomi";
technologies1[2] = "Redmi";
console.log(technologies1);

// The Length property return the length of an array.

let size = technologies1.length;
console.log(technologies1);

// Sorting of an Array return an Array alphabetically

technologies1.sort();
console.log(technologies1);

// The resersing method reserse an array by making last value first value.

technologies1.reverse();
console.log(technologies1);
