ig.module(
	'game.states.game-campaign-play-state'
	)
.requires(
	'game.states.abstract-state'
	)
.defines(function()
{

	GamePlayCampaignState = AbstractState.extend({

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

	    },

	    draw: function()
	    {

	    }
	});

});
