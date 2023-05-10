let a=arr.sort(function (a, b) { return a - b });
let s=new Set(a);
let arr1=Array.from(s);
console.log(arr1[arr1.length-2]);
