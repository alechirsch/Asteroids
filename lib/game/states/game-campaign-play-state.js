ig.module(
	'game.states.game-campaign-play-state'
	)
.requires(
	'game.states.abstract-game-play-state'
	)
.defines(function()
{

	GamePlayCampaignState = AbstractGamePlayState.extend({

		font: new ig.Font( 'media/font.png' ),
		ammoImg: new ig.Image('media/ammo_ui.png'),
		//http://images.clipartpanda.com/fuel-clipart-niELrL6iA.png
		fuelImg: new ig.Image('media/fuel_ui.png'),
		shieldImg: new ig.Image('media/shield_ui.png'),
		level: 0,
		ammo: 10,
		fuel: 1000,


		init: function() 
		{
			this.parent();
			console.log("GamePlayCampaignState Created");
		},

		start : function()
		{
			this.parent();

			console.log("GamePlayCampaignState Started");
		},

		kill : function()
		{
			this.parent();

			console.log("GamePlayCampaignState Killed");
		},

		startNewRound: function(){
			this.newRound();
			this.startRound();
		},

		newRound : function()
		{
			this.level++;
		},

		startRound: function()
		{
			this.ship.pos.x = ig.system.width/2;
			this.ship.pos.y = ig.system.height/2;
			this.asteroidManager.killAllAsteroids();
			this.asteroidManager.startSpawn(this.level, true);
			console.log("New Round " + this.level +  " Started");
		},

		update: function()
		{
			this.parent();

			if(stateManager.gameMode.shipProperties.fuel <= 0)
			{
				this.ship.health = 0;
				this.ship.kill();
			}

			if(stateManager.gameMode.shipProperties.ammo <= 0)
			{
				this.ship.health = 0;
				this.ship.kill();
			}

			if(this.ship.health <= 0)
			{
				console.log("Ship died");
				stateManager.startStore();
				this.asteroidManager.stopSpawn();
			}

			if(!this.asteroidManager.isRunning && !this.asteroidManager.asteroidsAlive && !this.asteroidManager.coinCounter){
				console.log("you win!!!!!");
				stateManager.startStore();
				this.asteroidManager.stopSpawn();
			}

		},

		draw: function()
		{
			this.parent();
			this.ammoImg.draw(100, 5);
			this.font.draw(' x ' + this.shipProperties.ammo, 180, 5, ig.Font.ALIGN.CENTER);

			this.shieldImg.draw(230, 5);
			this.font.draw(' x ' + this.shipProperties.shieldLevel, 295, 5, ig.Font.ALIGN.CENTER);

			this.fuelImg.draw(340, 5);

			var ctx = ig.system.context;

			ctx.fillStyle = "#0000ff";
			ctx.fillRect(430, 9, 202, 17);
			ctx.fillStyle = "#ff0000";
			ctx.fillRect(431, 10, 200, 15);
			ctx.fillStyle = "#00ff00";
			ctx.fillRect(431, 10, (this.shipProperties.fuel/this.shipProperties.fuelMax) * 200, 15);

		}
	});

});
