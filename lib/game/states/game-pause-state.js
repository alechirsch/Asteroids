ig.module(
	'game.states.game-pause-state'
	)
.requires(
	'game.states.abstract-state'
	)
.defines(function()
{

	var font = new ig.Font( 'media/font.png' );
	
	GamePauseState = AbstractState.extend({


	    init: function() 
	    {
	        console.log("GamePauseState Created");
	    },

	    start : function()
	    {
	    	this.parent();

	    	console.log("Game Pause Started");


	    	//Draw pause screen here as the screen isn't being refreshed on a pause
	    	var ctx = ig.system.context;

	    	ctx.fillStyle="rgba(0,0,0,.75";
			ctx.fillRect(0, 0, ig.system.width, ig.system.height);

			font.draw( "Game Paused. Press 'P' to resume", ig.system.width/2, ig.system.height/2, ig.Font.ALIGN.CENTER);
	    },

	    kill : function()
	    {
	    	this.parent();

	    	console.log("Game Pause Killed");
	    },


	    update: function()
	    {
	    	if(ig.input.pressed('p'))
			{
				stateManager.unpauseGame();
			}
	    },

	    draw: function()
	    {
	    	//Pause state draws once and then doesn't refresh. Do not use this function.
	    }
	});

});
