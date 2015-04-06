ig.module(
	'game.states.option-menu-state'
	)
.requires(
	'game.states.abstract-state'
	)
.defines(function()
{

	OptionMenuState = AbstractState.extend({

	    init: function() 
	    {
	        console.log("OptionMenuState Created");
	    },

	    start : function()
	    {
	    	this.parent();

	    	console.log("OptionMenuState Started");
	    },

	    kill : function()
	    {
	    	this.parent();

	    	console.log("OptionMenuState Killed");
	    },

	    update: function()
	    {

	    },

	    draw: function()
	    {

	    }
	});

});
