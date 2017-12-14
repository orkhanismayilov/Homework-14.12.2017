var x = Number(prompt("Insert 3 digit number"));
var a = 0;
var b = 0;
var c = 0;

if (x>99&&x<1000){
        var a = parseInt(x/100);
        // console.log(a);
        var b = parseInt((x-a*100)/10);
        // console.log(b);
        var c = parseInt((x-a*100)-b*10);
        // console.log(c);
        if (a==b&&b==c){
            console.log("=");
        }else if (a>=b&&a>=c){
            console.log(a);
        }else if (b>=a&&b>=c){
            console.log(b);
        }else if (c>=a&&c>=b){
            console.log(c);
        }
}else{
    console.log("Invalid number!")
}