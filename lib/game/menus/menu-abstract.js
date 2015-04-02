ig.module(
	'game.menus.menu-abstract'
	)
.requires(
	'impact.entity'
	)
.defines(function()
{

	AbstractMenu= ig.Entity.extend({

		x:0,
		y:0,
		w:0,
		h:0,
		selected:0,
		menuItems:[],

	    init: function(x, y, settings) 
	    {
	    	this.parent(x,y,settings);

	    	this.x = x;
	    	this.y = y;
	    	this.w = settings.w;
	    	this.h = settings.h;




	    	this.createButton(.1,0,.8,70);
	    	this.createButton(.1,100,.8,70);
	    	this.createButton(.1,200,.8,70);
	    	this.createButton(.1,300,.8,70);



	        console.log("Abstract Menu Created");

	        this.menuItems[this.selected].selected = 1; 
	    },

	    createButton : function(x,y,w,h,type,settings)
	    {
	    	if(x <= 1)
	    	{
	    		x = x*this.x;
	    	}
	    	if(y <= 1)
	    	{
	    		y = y*this.y;
	    	}
	    	if(w <= 1)
	    	{
	    		w = w*this.w;
	    	}
	    	if(h <= 1)
	    	{
	    		h = h*this.h;
	    	}

	    	x += this.x;
	    	y += this.y; 


	    	this.menuItems.push(new AbstractMenuItem(x, y, w, h));
	    },

	    update: function()
	    {
	    	if( ig.input.pressed('up') )
	    	{
	    		this.selected -= 1;
	    		
	    		if(this.selected < 0)
	    			this.selected = this.menuItems.length - 1;

	    		this.clearSelected();

	    		this.menuItems[this.selected].selected = 1;
	    	}

	    	if( ig.input.pressed('down') )
	    	{
	    		this.selected += 1;
	    		
	    		if(this.selected >= this.menuItems.length)
	    			this.selected = 0;

	    		this.clearSelected();

	    		this.menuItems[this.selected].selected = 1;
	    	}

	    	if( ig.input.pressed('enter') )
	    	{
	 			this.menuItems[this.selected].click();
	    	}
	    },

	    clearSelected: function()
	    {
	    	for (i = 0; i < this.menuItems.length; i++) {
			    this.menuItems[i].selected = false;
			}
	    },

	    draw: function()
	    {	
	    	var ctx = ig.system.context;

	    	//ctx.fillStyle="#aaaaaa";
			//ctx.fillRect(this.x, this.y, this.w, this.h);

			for (i = 0; i < this.menuItems.length; i++) {
			    this.menuItems[i].draw();
			}
	    }
	});

});
