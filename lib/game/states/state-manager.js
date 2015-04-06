ig.module(
	'game.states.state-manager'
	)
.requires(
	'game.states.main-menu-state',
	'game.states.option-menu-state',
	'game.states.help-menu-state',
	'game.states.game-campaign-play-state',
	'game.states.game-arcade-play-state',
	'game.states.game-pause-state',
	'game.states.game-over-state',
	'game.states.store-state'
	)
.defines(function()
{

	StateManager = ig.Class.extend({
	    init: function() 
	    {
	        console.log("StateManager Created");

	        //Prevents this from being overwritten by buttons on callback
	        stateManager = this;
	    },

	    start: function()
	    {
	    	this.mainMenuState = new MainMenuState();
	        this.helpMenuState = new HelpMenuState();
	        this.optionMenuState = new OptionMenuState();
	        this.gamePlayCampaignState = new GamePlayCampaignState();
	        this.gamePlayArcadeState = new GamePlayArcadeState();
	        this.gamePauseState = new GamePauseState();
	        this.gameOverState = new GameOverState();
	        this.storeState = new StoreState();

	        this.mainMenu();
	    },

	    update: function()
	    {
	    	if(stateManager.currentState != null)
	    		stateManager.currentState.update();
	    },

	    draw: function()
	    {
	    	if(stateManager.currentState != null)
	    		stateManager.currentState.draw();
	    },



	    //Special Functions

	    startCampaign : function()
	    {
	    	stateManager.changeState(stateManager.gamePlayCampaignState);
	    },

	    startArcade : function()
	    {
	    	stateManager.changeState(stateManager.gamePlayArcadeState);
	    },

	    endGame: function()
	    {
	    	stateManager.changeState(stateManager.gameOverState);
	    },

	    mainMenu: function()
	    {
	    	stateManager.changeState(stateManager.mainMenuState);
	    },

	    pauseGame: function()
	    {
	    	stateManager.changeState(stateManager.gamePauseState);
	    },

	    startOptions: function()
	    {
	    	stateManager.changeState(stateManager.optionMenuState);
	    },

	    startHelp: function()
	    {
	    	stateManager.changeState(stateManager.helpMenuState);
	    },


	    changeState: function(newState)
	    {
	    	if(stateManager.currentState != null)
	    		stateManager.currentState.kill();

	    	stateManager.currentState = newState;

	    	newState.start();
	    }
	});

});