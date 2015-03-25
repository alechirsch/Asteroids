ig.module(
	'game.states.main-menu-state'
	)
.requires(
	'game.states.abstract-state'
	)
.defines(function()
{

	MainMenuState = AbstractState.extend({

	    init: function() 
	    {
	        console.log("MainMenuState Created");
	    },

	    update: function()
	    {

	    },

	    draw: function()
	    {

	    }
	});

});
