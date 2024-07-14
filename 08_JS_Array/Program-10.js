var rectangles = [
    { length: 5, width: 3 },
    { length: 10, width: 4 },
    { length: 7, width: 8 }
  ];
  
  var assignArea = function (rectangle) {
    rectangle.area = rectangle.length * rectangle.width;
  };
  
  var showInfo = function (rectangle) {
    console.log("Length: " + rectangle.length);
    console.log("Width: " + rectangle.width);
    console.log("Area: " + rectangle.area);
    console.log(); 
  };
  
  rectangles.forEach(function (rectangle) {
  });
  
  rectangles.forEach(showInfo);   