var Building = {
	//Types of buildings

	build: function(id, planet) { 	
		//id == Building.Buildings.Metal
		//planet == Account.Homeworld
		if (id.checkDependencies(planet)[0]) {
			planet.buildings[id.name] ? planet.buildings[id.name]++ : planet.buildings[id.name] = 1;
		}
	},

	constructionTime: function(planet, building, level) {
		//constructionTime(Account.Homeworld, Building.Buildings.Metal, Account.Homeworld.buildings['Metal Mine']) 
		//Returns amount of time to build each building
		return Math.floor(((((Building.costPerLevel('metal', building, level) + Building.costPerLevel('crystal', building, level)) * 1440) / 1000 ) / (1 + planet.RoboticsBuilding.level)) / Math.pow(2, planet.NaniteBuilding.level)) * 1000; 
	},
	
	costPerLevel: function(resource, building, level) {
		if (resource == 'metal') // return amount of each resource 
			return Math.round(building.baseCostMetal * (Math.pow(building.costPerLevelFactor, Number(level)))); 
		else if (resource == "crystal") 
			return Math.round(building.baseCostCrystal * (Math.pow(building.costPerLevelFactor, Number(level))));
		else if (resource == 'fuel')
			return Math.round(building.baseCostFuel * (Math.pow(building.costPerLevelFactor, Number(level)))); 
	},
	
	display: function(planet) {
		for (var p in this.Buildings) {
			var dependency = Engine.checkDependencies(this.Buildings[p].checkDependencies(planet));
			if (dependency) {
				$("li#"+this.Buildings[p].displayId).empty(); //Reset element for renewal (if renewing)
				$("li#"+this.Buildings[p].displayId).append("<h2 class='building-name' style='display: inline-block'>" +this.Buildings[p].name+"</h2>"); //Set name in each location
				if (planet.buildings[this.Buildings[p].name]) { //If the building has been built, show the level of building
					$("li#"+this.Buildings[p].displayId).append(" <h3 style='display: inline-block'> (Level: "+planet.buildings[this.Buildings[p].name]+")</h3>");
				}
			}
		}
	},
	
	//List of building objects
	Buildings: {
		//TODO: make button-making property that builds in the object path (Building.Buildings.Metal)
		Metal: {
			name: 'Metal Mine',
			displayId: "metalmine",
			baseCostMetal: 60,
			baseCostCrystal: 15,
			baseCostFuel: 0,
			costPerLevelFactor: 1.5,
			checkDependencies: function(planet) {
				return [[true], ["No dependencies"]];
			}
		},
		Crystal: {
			name: 'Crystal Mine',
			displayId: "crystalmine",
			baseCostMetal: 45,
			baseCostCrystal: 24,
			baseCostFuel: 0,
			costPerLevelFactor: 1.6,
			checkDependencies: function(planet) {
				return [[true], ["No dependencies"]];
			}
		},
		Fuel: {
			name: 'Fuel Mine',
			displayId: "fuelmine",
			baseCostMetal: 225,
			baseCostCrystal: 75,
			baseCostFuel: 0,
			costPerLevelFactor: 1.5,
			checkDependencies: function(planet) {
				return [[true], ["No dependencies"]];
			}
		},
		Power: {
			name: 'Power Plant',
			displayId: "power",
			baseCostMetal: 75,
			baseCostCrystal: 30,
			baseCostFuel: 0,
			costPerLevelFactor: 1.5,
			checkDependencies: function(planet) {
				return [[true], ["No dependencies"]];
			}
		},
		Robotics: {
			name: 'Robotics Factory',
			displayId: "robotics",
			baseCostMetal: 400,
			baseCostCrystal: 120,
			baseCostFuel: 200,
			costPerLevelFactor: 2,
			checkDependencies: function(planet) {
				return [[true], ["No dependencies"]];
			}
		}, 
		Shipyard: {
			name: 'Shipyard',
			displayId: "shipyard",
			baseCostMetal: 400,
			baseCostCrystal: 200,
			baseCostFuel: 100, 
			costPerLevelFactor: 2,
			checkDependencies: function(planet) {
				return [[planet.buildings["Robotics Factory"] >= 2], ["Robotics Factory (Level 2)"]];
			}
		},
		Research: {
			name: 'Research Lab',
			displayId: "research",
			baseCostMetal: 200,
			baseCostCrystal: 400,
			baseCostFuel: 200,
			costPerLevelFactor: 2,
			checkDependencies: function(planet) {
				return [[true], ["No dependencies"]];
			}
		}, 
		Nanite: {
			name: 'Nanite Factory',
			displayId: "nanite",
			baseCostMetal: 1000000,
			baseCostCrystal: 500000,
			baseCostFuel: 100000,
			costPerLevelFactor: 2,
			checkDependencies: function(planet) {
				return [[planet.buildings["Robotics Factory"] >= 10,  Account.research["Computer Technology"] >= 10], ["Robotics Factory (Level 10)", "Computer Technology (Level 10)"]];
			}
		}
	}
};