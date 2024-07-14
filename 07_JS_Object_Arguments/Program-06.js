var line = function (lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substr(0, lineLength);
};

var spaces = function (spaceLength) {
    var space = "                                        ";
    spaceLength = Math.max(0, spaceLength);
    spaceLength = Math.min(40, spaceLength);
    return space.substr(0, spaceLength);
};

var emptyBox = function (width) {
    width = Math.max(0, width);
    width = Math.min(40, width);
    var topBottom = line(width);
    var middle = "=" + spaces(width - 2) + "=";
    
    console.log(topBottom);
    for (var i = 0; i < 3; i++) {
        console.log(middle);
    }
    console.log(topBottom);
};

for (var i = -20; i <= 60; i += 10) {
    console.log(line(i));
}

console.log(spaces(10) + "end");

emptyBox(12);