var CalendarEvent = function (title, startDate, startTime, endTime) {
    this.title = title;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endTime = endTime;
  
    this.showEvent = function () {
        var dateString = [
            this.startDate,
            " - (",
            this.startTime,
            " - ",
            this.endTime,
            ")"
        ].join("");
      
        console.log(this.title + ": " + dateString);
    };
};

var calEvent1 = new CalendarEvent(
    "Annual Review",
    "3/5/16",
    "4.00pm",
    "5.00pm"
);

calEvent1.showEvent(); 

var calEvent2 = new CalendarEvent(
    "Team Meeting",
    "3/6/16",
    "2.00pm",
    "3.00pm"
);

calEvent2.showEvent(); 