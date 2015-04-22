ig.module(
	'game.states.game-over-state'
	)
.requires(
	'game.states.abstract-state'
	)
.defines(function()
{

	GameOverState = AbstractState.extend({

		font: new ig.Font( 'media/font.png' ),

	    init: function() 
	    {
	        console.log("GameOverState Created");
	    },

	    start : function()
	    {
	    	this.parent();

	    	console.log("Game Over Started");
	    },

	    kill : function()
	    {
	    	this.parent();

	    	console.log("Game Over Killed");
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
			
			this.font.draw( "You scored " + stateManager.gameMode.coins + ". Press Enter to continue!", ig.system.width/2, ig.system.height/2, ig.Font.ALIGN.CENTER);
	    }
	});

});
