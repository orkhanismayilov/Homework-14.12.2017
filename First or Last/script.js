var x = Number(prompt("Insert 3 digit number"));
var a = 0;
var c = 0;

if (x>99&&x<1000){
        var a = parseInt(x/100);
        console.log(a);
        var b = x%10;
        console.log(b);
        if (a==b){
            console.log("=");
        }else if (a>b){
            console.log(a);
        }else{
            console.log(b);
        }
}else{
    console.log("Invalid number!")
}