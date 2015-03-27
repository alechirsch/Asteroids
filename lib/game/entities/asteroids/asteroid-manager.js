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
	    	console.log(this.asteroids.length);
	    	if(this.isRunning)
	    	{
	    		if(this.asteroids.length < this.asteroidsAllowed)
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

	    	var random = Math.random() * 3 ;

	    	if(random < 1)
	    		var type = AsteroidSmallEntity;
	    	else if(random < 2.5)
	    		var type = AsteroidMediumEntity;
	    	else
	    		var type = AsteroidLargeEntity;

	    	this.createAsteroid(0,0,type,0,1);
	    },

	    createAsteroid : function(x,y,type,color,isNewSpawn)
	    {
	    	var newAsteroid = ig.game.spawnEntity(type,0,0);

	    	newAsteroid.isNewSpawn = isNewSpawn;
	    	
	    	if(isNewSpawn)
	    		this.asteroidsAlive++;

	    	newAsteroid.pos.x = x;
	    	newAsteroid.pos.y = y;
	    	newAsteroid.setColor(color);

	    	newAsteroid.manager = this;
	    	this.asteroids.push(newAsteroid);
	    },

	    killedAsteroid : function(asteroid)
	    {
	    	if(asteroid.isNewSpawn)
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

	    }
	});

});
