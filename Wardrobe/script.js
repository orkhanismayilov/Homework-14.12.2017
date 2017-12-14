var a = Number(prompt("Please, enter the length of the wardrobe"));
var b = Number(prompt("Please, enter the height of the wardrobe"));
var c = Number(prompt("Please, enter the depth of the wardrobe"));

var x = Number(prompt("Please, enter the width of the door"));
var y = Number(prompt("Please, enter the height of the door"));

if (a*b<x*y||b*c<x*y||a*c<x*y){
    console.log("Yes");
}else{
    console.log("No");
}