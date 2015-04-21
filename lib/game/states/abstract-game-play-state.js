ig.module(
	'game.states.abstract-game-play-state'
	)
.requires(
	'game.states.abstract-state',
	'game.properties.shipProperties'
	)
.defines(function()
{
	AbstractGamePlayState = AbstractState.extend({

		gravity: 0,
		ship: null,
		coins: 0,
		coinImage: new ig.Image('media/coin.png'),
		font: new ig.Font('media/score.font.png'),

	    init: function() 
	    {
	        console.log("AbstractGamePlayState Created");
	        
	        this.shipProperties = new ShipProperties();
	    },

	    start : function()
	    {
	    	this.parent();
	    	console.log("AbstractGamePlayState Started");

	    	//Creates Asteroid Manager
	    	this.asteroidManager = new AsteroidManager();
	    },

	    kill : function()
	    {
	    	this.parent();

	    	console.log("AbstractGamePlayState Killed");
	    },

	    update: function()
	    {
	    	this.parent();

	    	//Keeps the asteroid manager updating
	    	this.asteroidManager.update();

			if(ig.input.pressed('p'))
			{
				stateManager.pauseGame();
			}
	    },

	    draw: function()
	    {
	    	this.parent();

	    	this.coinImage.drawTile(5, 5, 0, 32);
			this.font.draw('x ' + this.coins, 45, 5);
	    }
	});

});
