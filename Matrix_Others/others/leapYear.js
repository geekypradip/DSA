//Leap Year
// 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, and 2048.
var year =2004;
if(year%4===0&&year%100!==0 ||year%400===0)
    console.log("The Year is Leap Year");
else
    console.log("The Year is not leap year");
