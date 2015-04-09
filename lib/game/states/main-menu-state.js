ig.module(
	'game.states.main-menu-state'
	)
.requires(
	'game.states.abstract-state',
	'game.menus.main-menu'
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

	    	this.mainMenu = ig.game.spawnEntity(MainMenu, ig.system.width/2, ig.system.height/2, {w:400, h:400});
	    },

	    kill : function()
	    {
	    	this.parent();

	    	console.log("Main Menu Killed");

    		if(this.mainMenu)
	    		this.mainMenu.kill();
	    },

	    update: function()
	    {

	    },

	    draw: function()
	    {

	    }
	});

});
