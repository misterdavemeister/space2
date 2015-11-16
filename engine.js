(function() {
	var Engine = window.Engine = {
		/* Constants, properties */
		MAX_PLANETS: 9, //Maximum allowed planets, homeworld plus colonies
		DEFAULT_PLANET_NAMES: {
			1: "Homeworld",
			2: "Colony1",
			3: "Colony2",
			4: "Colony3",
			5: "Colony4",
			6: "Colony5",
			7: "Colony6",
			8: "Colony7",
			9: "Colony8"
		},
		dgameState: {}, //Used to save state
		
		logging: true, 
		
		/* setup, saving/loading game */
		//First function called in the engine. Tries to load game, starts new game if no previous game
		init: function() {
			try {
				Engine.dgameState = JSON.parse(localStorage.dgame);
				if(Engine.dgameState) {
					Engine.log("Loading Game");
					Engine.loadGame(Engine.dgameState);
				}
			} catch(e) {
				Engine.log(e);
				Engine.log("starting new game");
                Engine.newGame();
			}
        },
		
		loadGame: function(game) {
			Account.init(game);
			Engine.saveGame();
		},
 
        newGame: function() {
			Account.init();
			Engine.saveGame();
        },
		
		display: function(planet) {
			CurrentPlanet = planet;
			$("p#metal-amount").html(CurrentPlanet.resources.metal);
			$("p#crystal-amount").html(CurrentPlanet.resources.crystal);
			$("p#fuel-amount").html(CurrentPlanet.resources.fuel);
			Building.display(CurrentPlanet, Account);
		},
		
		saveGame: function() {
			if(typeof Storage != 'undefined' && localStorage) {
			/*	if(Engine._saveTimer != null) {
					clearTimeout(Engine._saveTimer);
				}
				if(typeof Engine._lastNotify == 'undefined' || Date.now() - Engine._lastNotify > Engine.SAVE_DISPLAY){
					$('#saveNotify').css('opacity', 1).animate({opacity: 0}, 1000, 'linear');
					Engine._lastNotify = Date.now();
				}*/
				Engine.systemMessage("Saving game");
				localStorage.dgame = JSON.stringify(Account);
			}
		},
		
		log: function() {
			if (this.logging) {
				for (var p in arguments){
					//console.log(arguments[p]);
					Engine.systemMessage(arguments[p], 'b');
				}
			}
		},
		
		systemMessage: function(msg, priority) {
			//priority = n (neutral), g (good), b (bad)
			if (priority == undefined) priority = "n";
			$("#messages").append("<div><p class='" +priority+" new-message'>"+msg+"</p></div>");
			$(".new-message").animate({
				backgroundColor: '#505B60'
						}, 0000, function() {
							$(this).toggleClass("new-message");
						});
						
		},
		
		checkDependencies: function(array) {
			return array[0].every(function(b) {return b === true;})
		},
		
		expand: function(el) {
			//BUG: clicking quickly causes it to grow too large. maybe hardcode height values
			/*var heightValue = Number($(el).css('height').replace('px', ''));
			var widthValue = Number($(el).css('width').replace('px', ''));*/
			if ($(el).hasClass('not-expanded')) {
                                $(el).removeClass('not-expanded');
				$(el).animate({
					height: String(500)+"px",
					width: String(1000)+"px"
				}, 500, function() {
					//moved
				});
			}
			else {
				$(el).animate({
					height: "100px",
					width: "800px"
				},500, function() {
					$(el).addClass('not-expanded');
				});
			}
		}
	};
})();

$(function() {
  var CurrentPlanet;
  Engine.init();
  Engine.display(Account.Homeworld); 
});
