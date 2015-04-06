ig.module(
	'game.states.option-menu-state'
	)
.requires(
	'game.states.abstract-state',
	'game.menus.options-menu'
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

	    	this.optionMenu = ig.game.spawnEntity(OptionMenu, 400, 100, {w:400, h:600});
	    },

	    kill : function()
	    {
	    	this.parent();

	    	console.log("OptionMenuState Killed");

	    	if(this.optionMenu)
	    		this.optionMenu.kill();
	    },

	    update: function()
	    {

	    },

	    draw: function()
	    {

	    }
	});

});
