var x = Number(prompt("Insert month number"));
var season = "";

if (x>=1&&x<=12){
    if (x>=3&&x<=5){
        season = "Spring";
    }else if (x>=6&&x<=8){
        season = "Summer";
    }else if (x>=9&&x<=11){
        season = "Autumn";
    }else{
        season = "Winter"
    }
    console.log(season);

}else{
    console.log("Invalid month number");
}