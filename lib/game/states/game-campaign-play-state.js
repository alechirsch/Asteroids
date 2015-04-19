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
	    }
	});

});
