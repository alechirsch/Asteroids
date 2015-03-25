ig.module(
	'game.states.game-play-state'
	)
.requires(
	'game.states.abstract-state'
	)
.defines(function()
{

	GamePlayState = AbstractState.extend({

	    init: function() 
	    {
	        console.log("GamePlayState Created");
	    },

	    update: function()
	    {

	    },

	    draw: function()
	    {

	    }
	});

});
