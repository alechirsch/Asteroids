ig.module(
	'game.states.abstract-game-play-state'
	)
.requires(
	'game.states.abstract-state'
	)
.defines(function()
{
	AbstractGamePlayState = AbstractState.extend({

		gravity: 0,
		ship: 0,
		coins: 0,
		coinImage: new ig.Image('media/coin.png'),
		font: new ig.Font('media/score.font.png'),

	    init: function() 
	    {
	        console.log("AbstractGamePlayState Created");
	    },

	    start : function()
	    {
	    	this.parent();
	    	console.log("AbstractGamePlayState Started");

	    	//Creates Asteroid Manager
	    	this.asteroidManager = new AsteroidManager();
			this.asteroidManager.startSpawn();

			//Creates Ship
			this.ship = ig.game.spawnEntity(ShipEntity, ig.system.width/2, ig.system.height/2);
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

	    	//Allows ship to respawn when dead
	    	if(this.ship.health === 0 && ig.input.state('enter')){
				this.ship = ig.game.spawnEntity(ShipEntity, ig.system.width/2, ig.system.height/2);
			}


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
