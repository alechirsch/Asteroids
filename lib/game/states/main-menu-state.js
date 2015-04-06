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

	    start : function()
	    {
	    	this.parent();

	    	console.log("Main Menu Started");
	    },

	    kill : function()
	    {
	    	this.parent();

	    	console.log("Main Menu Killed");
	    },

	    update: function()
	    {

	    },

	    draw: function()
	    {

	    }
	});

});
