var k = Number(prompt("Please, enter the amount of pupils"));
    console.log("Amount of pupils: " + k + " persons");
var w = Number(prompt("Please, enter the weight limit for tents"));
    console.log("Weight limit for tents: " + w + " kg");

var a1 = Number(prompt("Please, enter the weight of first tent"));
    console.log("Tent #1 weight: " + a1 + " kg");
var a2 = Number(prompt("Please, enter the weight of second tent"));
    console.log("Tent #2 weight: " + a2 + " kg");
var a3 = Number(prompt("Please, enter the weight of third tent"));
    console.log("Tent #3 weight: " + a3 + " kg");

var b1 = Number(prompt("Please, enter the capacity of first tent"));
    console.log("Tent #1 capacity: " + b1 + " persons");
var b2 = Number(prompt("Please, enter the capacity of second tent"));
    console.log("Tent #2 capacity: " + b2 + " persons");
var b3 = Number(prompt("Please, enter the capacity of third tent"));
    console.log("Tent #3 capacity: " + b3 + " persons");

if (k!<=0&&w!<=0&&a1!<=0&&a2!<=0&&a3!<=0&&b1!<=0&&b2!<=0&&b3!<=0){
    if (a1<=w&&b1>=k){
        console.log("Yes");
    }else if (a2<=w&&b2>=k){
        console.log("Yes");
    }else if (a3<=w&&b3>=k){
        console.log("Yes");
    }else if (a1+a2<=w&&b1+b2>=k){
        console.log("Yes");
    }else if (a2+a3<=w&&b2+b3>=k){
        console.log("Yes");
    }else if (a1+a3<=w&&b1+b3>=k){
        console.log("Yes");
    }else if (a1+a2+a3<=w&&b1+b2+b3>=k){
        console.log("Yes");
    }else{
        console.log("No ¯\_(ツ)_/¯");
    }
}else {
    console.log("Entered data should be more than 0")
}
