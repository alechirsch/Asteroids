ig.module(
	'game.states.game-won-state'
	)
.requires(
	'game.states.abstract-state'
	)
.defines(function()
{

	GameWonState = AbstractState.extend({
		font: new ig.Font( 'media/font.png' ),

	    init: function() 
	    {
	        console.log("GameWonState Created");
	    },

	    start : function()
	    {
	    	this.parent();

			/*this.font.draw( "You beat the campaign mode!!! Press Enter to continue!", ig.system.width/2, ig.system.height/2, ig.Font.ALIGN.CENTER);
	    	console.log("Game Won Started");*/
	    },

	    kill : function()
	    {
	    	this.parent();

	    	console.log("Game Won Killed");
	    },


	    update: function()
	    {
	    	if(ig.input.state('enter'))
	    	{
				stateManager.mainMenu();
			}
	    },

	    draw: function()
	    {
	    	var ctx = ig.system.context;

	    	ctx.fillStyle="rgba(0,0,0,.75";
			ctx.fillRect(0, 0, ig.system.width, ig.system.height);
			
			this.font.draw( "You beat the campaign mode!!! Press Enter to continue!", ig.system.width/2, ig.system.height/2, ig.Font.ALIGN.CENTER);
	    }
	});

});
