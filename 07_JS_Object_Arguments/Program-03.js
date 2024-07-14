var buildCar;
var getCarInfo;
var car1;
var car2;

buildCar = function (make, model, year, type, color) {
    return {
        make: make,
        model: model,
        year: year,
        type: type,
        color: color
    };
};

getCarInfo = function (car) {
    return car.make.toUpperCase() + " " + car.model + ": " + car.year + ", " + car.type + ", " + car.color;
};

car1 = buildCar("Toyota", "Camry", 2022, "Sedan", "Blue");
car2 = buildCar("Tesla", "Model S", 2023, "Electric", "Red");

console.log(getCarInfo(car1));
console.log(getCarInfo(car2));