var Ship = {
	constructionTime: function(planet, ship) {
		//construct(this, this.scargo.id)
		//Returns amount of time to build each ship
		return Math.floor(((((ship.baseCostMetal + ship.baseCostCrystal) * 360) / 1000 ) / (1 + planet.RoboticsBuilding.level)) / Math.pow(2, planet.NaniteBuilding.level)) * 1000; 
	},
	Ships: {
		SCargo: {
			name: "Small Cargo", 
			baseCostMetal: 2000,
			baseCostCrystal: 2000,
			baseCostFuel: 0,
			armor: 4000,
			shield: 10,
			weapon: 5,
			cargo: 5000,
			speed: 5000,
			fuel: 10
		},
		LCargo: {
			name: "Largo Cargo", 
			baseCostMetal: 6000,
			baseCostCrystal: 6000,
			baseCostFuel: 0,
			armor: 12000,
			shield: 25,
			weapon: 5,
			cargo: 25000,
			speed: 7500,
			fuel: 50
		},
		LFighter: {
			name: "Light Fighter",
			baseCostMetal: 3000,
			baseCostCrystal: 1000,
			baseCostFuel: 0,
			armor: 4000,
			shield: 10,
			weapon: 50,
			cargo: 50,
			speed: 12500,
			fuel: 20
		},
		HFighter: {
			name: "Heavy Fighter",
			baseCostMetal: 6000,
			baseCostCrystal: 4000,
			baseCostFuel: 0,
			armor: 10000,
			shield: 25,
			weapon: 150,
			cargo: 100,
			speed: 10000,
			fuel: 75
		},
		Cruiser: {
			name: "Cruiser",
			baseCostMetal: 20000,
			baseCostCrystal: 7000,
			baseCostFuel: 2000,
			armor: 27000,
			shield: 50,
			weapon: 400,
			cargo: 800,
			speed: 15000,
			fuel: 300
		},
		Battleship: {
			name: "Battleship",
			baseCostMetal: 45000,
			baseCostCrystal: 15000,
			baseCostFuel: 0,
			armor: 60000,
			shield: 200,
			weapon: 1000,
			cargo: 1500,
			speed: 1000,
			fuel: 500
		},
		Colony: {
			name: "Colony Ship",
			baseCostMetal: 10000,
			baseCostCrystal: 20000,
			baseCostFuel: 10000,
			armor: 30000,
			shield: 100,
			weapon: 50,
			cargo: 7500,
			speed: 2500,
			fuel: 1000
		},
		Recycler: {
			name: "Recycler",
			baseCostMetal: 10000,
			baseCostCrystal: 6000,
			baseCostFuel: 2000,
			armor: 16000,
			shield: 10,
			weapon: 1,
			cargo: 20000,
			speed: 2000,
			fuel: 300
		},
		Probe: {
			name: "Espionage Probe",
			baseCostMetal: 0,
			baseCostCrystal: 1000,
			baseCostFuel: 0,
			armor: 1000,
			shield: 0.01,
			weapon: 0.01,
			cargo: 5,
			speed: 100000000,
			fuel: 1
		},
		Bomber: {
			name: "Bomber",
			baseCostMetal: 50000,
			baseCostCrystal: 25000,
			baseCostFuel: 15000,
			armor: 75000,
			shield: 500,
			weapon: 1000,
			cargo: 500,
			speed: 4000,
			fuel: 1000
		},
		Satellite: {
			name: "Solar Satellite",
			baseCostMetal: 0,
			baseCostCrystal: 2000,
			baseCostFuel: 500,
			armor: 2000,
			shield: 1,
			weapon: 1,
			cargo: 0,
			speed: 0,
			fuel: 0
		},
		Destroyer: {
			name: "Destroyer",
			baseCostMetal: 60000,
			baseCostCrystal: 50000,
			baseCostFuel: 15000,
			armor: 110000,
			shield: 500,
			weapon: 2000,
			cargo: 2000,
			speed: 5000,
			fuel: 1000
		},
		Deathstar: {
			name: "Deathstar",
			baseCostMetal: 5000000,
			baseCostCrystal: 4000000,
			baseCostFuel: 1000000,
			armor: 9000000,
			shield: 50000,
			weapon: 200000,
			cargo: 1000000,
			speed: 100,
			fuel: 1
		},
		Battlecruiser: {
			name: "Battlecruiser",
			baseCostMetal: 30000,
			baseCostCrystal: 40000,
			baseCostFuel: 15000,
			armor: 70000,
			shield: 400,
			weapon: 700,
			cargo: 750,
			speed: 10000,
			fuel: 250
		}
	}
};