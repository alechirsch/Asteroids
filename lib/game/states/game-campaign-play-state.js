ig.module(
	'game.states.game-campaign-play-state'
	)
.requires(
	'game.states.abstract-game-play-state'
	)
.defines(function()
{

	GamePlayCampaignState = AbstractGamePlayState.extend({

		font: new ig.Font( 'media/font.png' ),
		ammoImg: new ig.Image('media/ammo_ui.png'),
		//http://images.clipartpanda.com/fuel-clipart-niELrL6iA.png
		fuelImg: new ig.Image('media/fuel_ui.png'),
		level: 0,
		ammo: 10,
		fuel: 10,


	    init: function() 
	    {
	    	this.parent();
	    	
	        console.log("GamePlayCampaignState Created");
	    },

	    start : function()
	    {
	    	this.parent();

	    	console.log("GamePlayCampaignState Started");
	    },

	    kill : function()
	    {
	    	this.parent();

	    	console.log("GamePlayCampaignState Killed");
	    },

	    startNewRound: function(){
	    	this.newRound();
	    	this.startRound();
	    },

	    newRound : function()
	    {
	    	this.level++;
	    },

	    startRound: function()
	    {
	    	this.ship.pos.x = ig.system.width/2;
	    	this.ship.pos.y = ig.system.height/2;
	    	this.asteroidManager.killAllAsteroids();
	    	this.asteroidManager.startSpawn(this.level, true);
	    	console.log("New Round " + this.level +  " Started");
	    },

	    update: function()
	    {
	    	this.parent();

	    	if(this.ship.health <= 0)
	    	{
	    		console.log("Ship died");
	    		stateManager.startStore();
	    		this.startRound();
	    	}

	    	if(!this.asteroidManager.isRunning && !this.asteroidManager.asteroidsAlive){
	    		console.log("you win!!!!!");
	    		stateManager.startStore();
	    		this.startNewRound();
	    	}

	    },

	    draw: function()
	    {
	    	this.parent();
	    	this.ammoImg.draw(100, 5);
	    	this.font.draw(' x ' + this.ammo, 180, 5, ig.Font.ALIGN.CENTER);
	    	this.fuelImg.draw(250, 5);
	    	//canvas.draw()


	    }
	});

});
