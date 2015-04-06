ig.module(
	'game.states.game-campaign-play-state'
	)
.requires(
	'game.states.abstract-game-play-state'
	)
.defines(function()
{

	GamePlayCampaignState = AbstractGamePlayState.extend({

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

	    update: function()
	    {
	    	this.parent();
	    },

	    draw: function()
	    {
	    	this.parent();
	    }
	});

});
