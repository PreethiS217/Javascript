var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
        console.log("Moons: " + (this.moons.length > 0 ? this.moons.join(', ') : "None") + ".");
    };
  
    this.addMoon = function (moon) {
        this.moons.push(moon);
    };
  
    this.removeMoon = function () {
        if (this.moons.length > 0) {
            return this.moons.pop();
        } else {
            return null;
        }
    };
};

var planet1 = new Planet("Jupiter", 5, "Gas Giant");

planet1.addMoon("Io");
planet1.addMoon("Europa");

planet1.showPlanet();

planet2.addMoon("Triton");
planet2.addMoon("Nereid");
planet2.addMoon("Proteus");

planet2.showPlanet(); 
planet2.removeMoon(); 
planet2.showPlanet(); 