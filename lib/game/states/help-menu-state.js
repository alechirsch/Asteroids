ig.module(
	'game.states.help-menu-state'
	)
.requires(
	'game.states.abstract-state'
	)
.defines(function()
{

	HelpMenuState = AbstractState.extend({

	    init: function() 
	    {
	        console.log("HelpMenuState Created");
	    },

	    start : function()
	    {
	    	this.parent();

	    	console.log("HelpMenuState Started");
	    },

	    kill : function()
	    {
	    	this.parent();

	    	console.log("HelpMenuState Killed");
	    },

	    update: function()
	    {

	    },

	    draw: function()
	    {

	    }
	});

});
