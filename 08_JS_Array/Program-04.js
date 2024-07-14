var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var dayInWeek = 4;

dayInWeek = 2;
console.log(days[dayInWeek]);       
console.log(days[dayInWeek - 1]);   

var getDay = function (index) {
    
    if (index >= 0 && index < days.length) {
        return days[index];
    } else {
        return "Invalid day index";
    }
};

console.log(getDay(4)); 