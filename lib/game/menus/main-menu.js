ig.module(
	'game.menus.main-menu'
	)
.requires(
	'game.menus.menu-grid-abstract'
	)
.defines(function()
{

	MainMenu = AbstractGridMenu.extend({		

	    init: function(x, y, settings) 
	    {
	    	this.parent(x,y,settings);

	    	this.createButton(.15,0,.7,70, "text", {text:"Campaign"}, ig.game.stateManager.startCampaign);
	    	this.createButton(.15,100,.7,70, "text",{text:"Arcade"}, ig.game.stateManager.startArcade);
	    	this.createButton(.15,200,.7,70, "text", {text:"Options"}, ig.game.stateManager.startOptions);
	    	this.createButton(.15,300,.7,70, "text", {text:"Help"}, ig.game.stateManager.startHelp);

	        console.log("Main Menu Created");
	    },

	    draw: function()
	    {	
	    	this.parent();
	    }
	});

});
