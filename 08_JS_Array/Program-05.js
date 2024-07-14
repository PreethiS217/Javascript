var getVisitorReport = function (visitorArray, dayInWeek) {
    var days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
    ];
    var index = dayInWeek - 1;
    var visitorReport;

    if (index >= 0 && index < days.length) {
        visitorReport = "There were ";
        visitorReport += visitorArray[index];
        visitorReport += " visitors ";
        visitorReport += "on " + days[index];
    } else {
        visitorReport = "Invalid day index";
    }

    return visitorReport;
};

var visitors = [354, 132, 210, 221, 481];

var report = getVisitorReport(visitors, 5);
console.log(report); 

var getVisitorReportUpdated = function (visitorArray, dayInWeek) {
    var days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    var index = dayInWeek - 1;
    var visitorReport;

    if (index >= 0 && index < days.length) {
        visitorReport = "There were ";
        visitorReport += visitorArray[index];
        visitorReport += " visitors ";
        visitorReport += "on " + days[index];
    } else {
        visitorReport = "Invalid day index";
    }

    return visitorReport;
};

var visitorsUpdated = [354, 132, 210, 221, 481, 300, 250]; 
var reportUpdated = getVisitorReportUpdated(visitorsUpdated, 6); 
console.log(reportUpdated); 

var getMonthlyVisitorReport = function (monthArray, weekNumber, dayInWeek) {
    
    if (weekNumber >= 1 && weekNumber <= monthArray.length && dayInWeek >= 1 && dayInWeek <= 7) {
        var weekArray = monthArray[weekNumber - 1];
        return getVisitorReportUpdated(weekArray, dayInWeek);
    } else {
        return "Invalid week number or day index";
    }
};

var week1 = [354, 132, 210, 221, 481, 300, 250];
var week2 = [400, 150, 220, 230, 490, 320, 260];
var week3 = [420, 160, 230, 240, 500, 330, 270];
var week4 = [440, 170, 240, 250, 510, 340, 280];
var month = [week1, week2, week3, week4];

console.log(getMonthlyVisitorReport(month, 2, 6)); 
console.log(getMonthlyVisitorReport(month, 4, 7)); 