/* 
Problem Description

Change AM/PM (12hr) time to military (24hr) time. 
Input is a string with AM/PM prefixed; Output should also be a string.

*/

function timeConversion(s) {
    // Write your code here
    let AMorPM = s.slice(-2);
    let hours = +s.slice(0,2);
    switch(AMorPM){
        case "AM":
            if(hours < 12){
                return s.slice(0,8);
            } else if (hours === 12){
                return `00:${s.slice(3,8)}`
            }
        break;
        case "PM":
            if(hours < 12){
                return `${(hours + 12).toString()}:${s.slice(3,8)}`
            } else if (hours === 12){
                return s.slice(0,8);
            }
    }
}
