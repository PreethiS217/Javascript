var point1;
var point2;
var move;
var showPoint;
var reflectX;
var rotate90;

move = function (point, change) {
    return {
        x: point.x + change.x,
        y: point.y + change.y
    };
};

showPoint = function (point) {
    console.log("( " + point.x + " , " + point.y + " )");
};

reflectX = function (point) {
    return {
        x: point.x,
        y: -point.y
    };
};

rotate90 = function (point) {
    return {
        x: -point.y,
        y: point.x
    };
};

point1 = { x: 2, y: 5 };

point2 = move(point1, { x: 6, y: -3 });

showPoint(point1);
console.log("Move 6 across and 3 down");
showPoint(point2);

var reflectedPoint = reflectX(point1);
console.log("Reflected in the x-axis:");
showPoint(reflectedPoint);

var rotatedPoint = rotate90(point1);
console.log("Rotated 90 degrees anticlockwise:");
showPoint(rotatedPoint);