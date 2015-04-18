ig.module(
	'game.states.game-campaign-play-state'
	)
.requires(
	'game.states.abstract-game-play-state'
	)
.defines(function()
{

	GamePlayCampaignState = AbstractGamePlayState.extend({

		level: 0,
		ammo: 10,
		fuel: 10,

	    init: function() 
	    {
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


	    startNewRound : function()
	    {
	    	this.level++;

	    	this.asteroidManager.startSpawn(this.level + 1);
	    	console.log("New Round " + this.level +  " Started");
	    },

	    update: function()
	    {
	    	this.parent();

	    	if(this.ship.health <= 0)
	    	{
	    		console.log("Ship died");
	    		stateManager.startStore();
	    	}

	    	if(this.asteroidManager.hasStarted && this.asteroidManager.asteroidsAlive === 0){
	    		console.log("you win!!!!!");
	    		stateManager.startStore();
	    		this.asteroidManager.asteroidTotalCount = 0;
	    		this.asteroidManager.hasStarted = false;
	    	}

	    },

	    draw: function()
	    {
	    	this.parent();
	    }
	});

});
