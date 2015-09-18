var Research = { 
	build: function(id, planet) {
		//id == Research.EnergyResearch
		//planet == Account.Homeworld
		if (id.checkDependencies(planet, Account)[0]) {
			//DG == account, if necessary
			//TODO: implement checkDependencies in each research obj
			Account.research[id.name] ? Account.research[id.name]++ : Account.research[id.name] = 1; 
		}
	},

	getConstructionTime: function(id, planet) {
		//id == Research.EnergyResearch
		return (id.name == "Graviton Technology") ? 1000 : (((Research.getCostPerLevel('metal') + Research.getCostPerLevel('crystal')) * 36) / 1000 ) / (1 + planet.buildings["Research Lab"]) * 100000; 
	},
	
	getCostPerLevel: function(res) {
		switch(this.type) {
			case 'graviton':
					if (res == 'metal') return 0;
					else if (res == 'crystal') return 0;
					else if (res == 'fuel') return 0;
					else if (res == 'energy') return this.baseCostEnergy * (Math.pow(3, this.level));
					break;
			case 'astrophysics':
					if (res == 'metal') return Math.round(this.baseCostMetal * (Math.pow(1.75, this.level)));
					else if (res == 'crystal') return Math.round(this.baseCostCrystal * (Math.pow(1.75, this.level)));
					else if (res == 'fuel') return Math.round(this.baseCostFuel * (Math.pow(1.75, this.level)));
					else if (res == 'energy') return Math.round(this.baseCostEnergy * (Math.pow(1.75, this.level)));
					break;
			default:
					if (res == 'metal') return Math.round(this.baseCostMetal * (Math.pow(2, this.level)));
					else if (res == 'crystal') return Math.round(this.baseCostCrystal * (Math.pow(2, this.level)));
					else if (res == 'fuel') return Math.round(this.baseCostFuel * (Math.pow(2, this.level)));
					else if (res == 'energy') return Math.round(this.baseCostEnergy * (Math.pow(2, this.level)));
					break;
		}
	},
	Researches: {
		EnergyResearch: {
			name: "Energy Technology",
			baseCostMetal: 0, 
			baseCostCrystal: 800,
			baseCostFuel: 400,
			baseCostEnergy: 0,
			checkDependencies: function(planet, acc) {
				return [[planet.buildings['Research Lab'] >= 1], ["Research Lab (Level 1)"]];
			}
		},
		LaserResearch: {
			name: "Laser Technology",
			baseCostMetal: 200, 
			baseCostCrystal: 100,
			baseCostFuel: 0,
			baseCostEnergy: 0,
			checkDependencies: function(planet, acc) {
				return [[planet.buildings['Research Lab'] >= 1, acc.research["Energy Technology"] >= 2], ['Research Lab (Level 1)', 'Energy Technology (Level 2)']];
			}
		},
		IonResearch: {
			name: "Ion Technology",
			baseCostMetal: 1000, 
			baseCostCrystal: 300,
			baseCostFuel: 100,
			baseCostEnergy: 0,
			checkDependencies: function(planet, acc) {
				return [[planet.buildings['Research Lab'] >= 4, acc.research["Laser Technology"] >= 5, acc.research["Energy Technology"] >= 4], ["Research Lab (Level 4)", "Laser Technology (Level 5)", "Energy Technology (Level 4)"]];
			}
		},
		PlasmaResearch: {
			name: "Plasma Technology",
			baseCostMetal: 2000, 
			baseCostCrystal: 4000,
			baseCostFuel: 1000,
			baseCostEnergy: 0,
			checkDependencies: function(planet, acc) {
				return [[planet.buildings['Research Lab'] >= 4, acc.research["Energy Technology"] >= 8, acc.research["Laser Technology"] >= 10, acc.research["Ion Technology"] >= 5], ["Research Lab (Level 4)", "Energy Technology (Level 8)", "Laser Technology (Level 10)", "Ion Technology (Level 5)"]];
			}
		},
		EspionageResearch: {
			name: "Espionage Technology",
			baseCostMetal: 200, 
			baseCostCrystal: 1000,
			baseCostFuel: 200,
			baseCostEnergy: 0,
			checkDependencies: function(planet, acc) {
				return [[planet.buildings['Research Lab'] >= 3], ['Research Lab (Level 3)']];
			}
		},
		ComputerResearch: {
			name: "Computer Technology",
			baseCostMetal: 0, 
			baseCostCrystal: 400,
			baseCostFuel: 600,
			baseCostEnergy: 0,
			checkDependencies: function(planet, acc) {
				return [[planet.buildings['Research Lab'] >= 1], ["Research Lab (Level 1)"]];
			}
		},
		HyperspaceTechResearch: {
			name: "Hyperspace Technology",
			baseCostMetal: 0, 
			baseCostCrystal: 4000,
			baseCostFuel: 2000,
			baseCostEnergy: 0,
			checkDependencies: function(planet, acc) {
				return [[planet.buildings['Research Lab'] >= 7, acc.research["Energy Technology"] >= 5, acc.research["Shielding Technology"] >= 5], ['Research Lab (Level 7)', 'Energy Technology (Level 5)', 'Shielding Technology (Level 5)']];
			}
		},
		IntergalacticResearch: {
			name: "Intergalactic Research Network",
			baseCostMetal: 240000, 
			baseCostCrystal: 400000,
			baseCostFuel: 160000,
			baseCostEnergy: 0,
			checkDependencies: function(planet, acc) {
				return [[planet.buildings['Research Lab'] >= 10, acc.research["Computer Technology"] >= 8, acc.research["Hyperspace Technology"] >= 8], ['Research Lab (Level 10)', 'Computer Technology (Level 8)', 'Hyperspace Technology (Level 8)']];
			}
		},
		GravitonResearch: {
			name: "Graviton Technology",
			baseCostMetal: 0, 
			baseCostCrystal: 0,
			baseCostFuel: 0,
			baseCostEnergy: 300000,
			checkDependencies: function(planet, acc) {
				return [[planet.buildings['Research Lab'] >= 12], ['Research Lab (Level 12)']];
			}
		},
		AstrophysicsResearch: {
			name: "Astrophysics Technology",
			baseCostMetal: 4000, 
			baseCostCrystal: 8000,
			baseCostFuel: 4000,
			baseCostEnergy: 0,
			checkDependencies: function(planet, acc) {
				return [[planet.buildings['Research Lab'] >= 3, acc.research["Espionage Technology"] >= 4, acc.research["Impulse Drive"] >= 3], ['Research Lab (Level 3)', 'Espionage Technology (Level 4)', 'Impulse Drive (Level 3)']];
			}
		},
		CombustionResearch: {
			name: "Combustion Drive",
			baseCostMetal: 400, 
			baseCostCrystal: 0,
			baseCostFuel: 600,
			baseCostEnergy: 0,
			checkDependencies: function(planet, acc) {
				return [[planet.buildings['Research Lab'] >= 1, acc.research["Energy Technology"] >= 1], ['Research Lab (Level 1)', 'Energy Technology (Level 1)']];
			}
		},
		ImpulseResearch: {
			name: "Impulse Drive",
			baseCostMetal: 2000, 
			baseCostCrystal: 4000,
			baseCostFuel: 600,
			baseCostEnergy: 0,
			checkDependencies: function(planet, acc) {
				return [[planet.buildings['Research Lab'] >= 2, acc.research["Energy Technology"] >= 1], ['Research Lab (Level 2)', 'Energy Technology (Level 1)']];
			}
		},
			HyperspaceDriveResearch: {
				name: "Hyperspace Drive",
				baseCostMetal: 10000, 
				baseCostCrystal: 20000,
				baseCostFuel: 6000,
				baseCostEnergy: 0,
				checkDependencies: function(planet, acc) {
					return [[planet.buildings['Research Lab'] >= 7, acc.research["Hyperspace Technology"] >= 3], ['Research Lab (Level 7)', 'Hyperspace Technology (Level 3)']];
				}
			},
			WeaponsResearch: {
				name: "Weapons Technology",
				baseCostMetal: 800, 
				baseCostCrystal: 200,
				baseCostFuel: 0,
				baseCostEnergy: 0,
				checkDependencies: function(planet, acc) {
					return [[planet.buildings['Research Lab'] >= 4], ['Research Lab (Level 4)']];
				}
			},
			ShieldingResearch: {
				name: "Shielding Technology",
				baseCostMetal: 200, 
				baseCostCrystal: 600,
				baseCostFuel: 0,
				baseCostEnergy: 0,
				checkDependencies: function(planet, acc) {
					return [[planet.buildings['Research Lab'] >= 6, acc.research['Energy Technology'] >= 3], ['Research Lab (Level 6)', 'Energy Technology (Level 3)']];
				}
			},
			ArmorResearch: {
				name: "Armor Technology",
				baseCostMetal: 1000, 
				baseCostCrystal: 0,
				baseCostFuel: 0,
				baseCostEnergy: 0,
				checkDependencies: function(planet, acc) {
					return [[planet.buildings['Research Lab'] >= 2], ['Research Lab (Level 2)']];
				}
			}
	}
};