ig.module(
	'game.entities.asteroids.asteroid-manager'
	)
.requires(
	'impact.game',
	'game.entities.asteroids.asteroid-large',
	'game.entities.asteroids.asteroid-medium',
	'game.entities.asteroids.asteroid-small'
	)
.defines(function()
{

	AsteroidManager = ig.Class.extend({


		asteroidsAllowed: 5,
		asteroidsAlive: 0,
		asteroidSpawnRate: .2,
		asteroids: [],
		isRunning: false,
		campaignMode: false,
		killAll: false,
		coinCounter: 0,

		init: function() 
		{
			console.log("AsteroidManager Created");
		},

		killAllAsteroids: function(){
			/*
			this.killAll = true;
			for(var i = 0; i < this.asteroids.length; i++){
				this.asteroids[i].kill();
			}
			this.killAll = false;
			*/
		},

		startSpawn: function(amount, type)
		{
			this.campaignMode = type;
			this.asteroidsAllowed = amount;
			this.isRunning = true;
			this.asteroidsAlive = 0;
			this.spawnTimer = new ig.Timer(this.asteroidSpawnRate);
		},

		stopSpawn: function()
		{
			this.isRunning = false;
			this.spawnTimer.pause();
		},

		update: function()
		{
	    	//console.log(this.spawnTimer.delta());
	    	if(this.isRunning)
	    	{
	    		if(this.asteroidsAlive < this.asteroidsAllowed)
	    		{
	    			if(this.spawnTimer.delta() >= 0)
	    			{
	    				this.spawnTimer.reset();
	    				this.spawnAsteroid();
	    			}
	    		}
	    		else if(this.campaignMode){
	    			this.stopSpawn();
	    		}
	    		
	    	}
	    },

	    spawnAsteroid : function()
	    {
	    	console.log("Spawning Asteroid");

	    	var random = Math.random() * 3 ;

	    	if(this.campaignMode) var type = AsteroidLargeEntity;
	    	else{
	    		if(random < 1)
	    			var type = AsteroidSmallEntity;
	    		else if(random < 2.5)
	    			var type = AsteroidMediumEntity;
	    		else
	    			var type = AsteroidLargeEntity;
	    	}
	    	this.createAsteroid(0,0,type,Math.floor(Math.random()*3),1);
	    },

	    createAsteroid : function(x,y,type,color,isNewSpawn)
	    {
	    	var newAsteroid = ig.game.spawnEntity(type,0,0);

	    	newAsteroid.isNewSpawn = isNewSpawn;
	    	
	    	if(isNewSpawn || this.campaignMode)
	    		this.asteroidsAlive++;

	    	newAsteroid.pos.x = x;
	    	newAsteroid.pos.y = y;
	    	newAsteroid.setColor(color);

	    	newAsteroid.manager = this;
	    	this.asteroids.push(newAsteroid);
	    },

	    killedAsteroid : function(asteroid)
	    {
	    	if(this.killAll) return;
	    	if(asteroid.isNewSpawn || this.campaignMode)
	    		this.asteroidsAlive--;

	    	//Spawn stuff after destroying

	    	if(asteroid instanceof AsteroidSmallEntity)
	    	{
	    		console.log("Small death");
	    	}
	    	else if(asteroid instanceof AsteroidMediumEntity)
	    	{
	    		console.log("Medium death " + asteroid.pos.x + "," + asteroid.pos.y);

	    		this.createAsteroid(asteroid.pos.x, asteroid.pos.y, AsteroidSmallEntity,asteroid.color, 0);
	    		this.createAsteroid(asteroid.pos.x, asteroid.pos.y, AsteroidSmallEntity,asteroid.color, 0);
	    	}
	    	else if(asteroid instanceof AsteroidLargeEntity)
	    	{
	    		console.log("Large death");

	    		this.createAsteroid(asteroid.pos.x, asteroid.pos.y, AsteroidMediumEntity,asteroid.color, 0);
	    		this.createAsteroid(asteroid.pos.x, asteroid.pos.y, AsteroidSmallEntity,asteroid.color, 0);
	    		this.createAsteroid(asteroid.pos.x, asteroid.pos.y, AsteroidSmallEntity,asteroid.color, 0);
	    	}

	    	var numCoins = Math.random() * 5;
	    	for(var i = 0; i < numCoins; i++){
	    		var newCoin = ig.game.spawnEntity(CoinEntity, asteroid.pos.x, asteroid.pos.y);
	    		newCoin.manager = this;
	    		this.coinCounter++;

	    	}

	    },

	    killedCoin: function(){
	    	this.coinCounter--;
	    }

	});

});
