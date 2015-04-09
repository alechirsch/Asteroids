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

	    },

	    draw: function()
	    {
	    	this.parent();
	    }
	});

});
