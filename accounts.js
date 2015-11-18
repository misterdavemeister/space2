var Account = {
    init: function(saveState) {
		// Engine.log("from planets.js line 3 (saveState being sent to init function in Account: ", saveState);

		//Account properties:
		Engine.dgameState 	= saveState != undefined ? $.extend(Engine.dgameState, saveState) : {};
		this.name 					= "name" in Engine.dgameState ? Engine.dgameState.name : "Jim-Bob";
		this.planetList 		= "planetList" in Engine.dgameState ? Engine.dgameState.planetList : {};
		this.research 			= "research" in Engine.dgameState ? Engine.dgameState.research : {};
		this.points 				= "points" in Engine.dgameState ? Engine.dgameState.points : 0;

		/* CHECK FOR PLANETS AND INITIATE THEM HERE */
		if (!($.isEmptyObject(this.planetList))) {
			//Planets already acquired, reinitiate them now...
			for (var p in this.planetList) {
				this[p] = new Account.Planet(this.planetList[p].count, this.planetList[p]); //create Account.Homeworld, whatever planet
				Account.planetList[p] = this[p]; //Put this object in the planetList object in order to save it
			}
		}
		else {
			this.Homeworld = Account.newPlanet();
		}

		return this;
    },

	newPlanet: function() {
		//safe way to add brand new planet to the game,
		//keeps only brand new planets in the planetList
		var c = 0, p, t;
		for (p in Account.planetList) {c++;}
		t = new Account.Planet(c+1);
		Account.planetList[t.name] = t;
		return t;
	},

	//PLANET CONSTRUCTOR//
	Planet: function(count, saveState) {
		//Planet properties:
		var state					  = saveState != undefined ? $.extend(state, saveState) : {};
		this.resources 			= "resources" in state ? state.resources : {
			metal: 500,
			crystal: 500,
			fuel: 0
		};
		this.count 					= count;
		this.buildings 			= "buildings" in state ? state.buildings : {};
		this.ships 					= "ships" in state ? state.ships : {};
		this.defenses 			= "defenses" in state ? state.defenses : {};
		this.name 					= "name" in state ? state.name : (function(c) {
			for (var p in Engine.DEFAULT_PLANET_NAMES) {
				if (p === String(c)) return Engine.DEFAULT_PLANET_NAMES[p];
			}
		})(this.count);

		return this;
	}
};
