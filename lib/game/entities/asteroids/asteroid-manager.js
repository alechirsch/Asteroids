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

	    init: function() 
	    {
	        console.log("AsteroidManager Created");
	    },

	    startSpawn: function()
	    {
	    	this.isRunning = true;
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
	    	}
	    },

	    spawnAsteroid : function()
	    {
	    	console.log("Spawning Asteroid");
	    	this.asteroidsAlive++;
	    	var random = Math.random() * 3 ;

	    	if(random < 1)
	    		var type = AsteroidSmallEntity;
	    	else if(random < 2.8)
	    		var type = AsteroidMediumEntity;
	    	else
	    		var type = AsteroidLargeEntity;

	    	var asteroid = ig.game.spawnEntity(type, 0, 0, 1);
	    	


	    	asteroid.manager = this;

	    	this.asteroids.push(asteroid);
	    },

	    killedAsteroid : function(asteroid)
	    {
	    	this.asteroidsAlive--;
	    }
	});

});
