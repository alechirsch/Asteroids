ig.module(
	'game.menus.shop-menu-item'
	)
.requires(
	'game.menus.menu-item-abstract'
	)
.defines(function()
{
	var font = new ig.Font( 'media/font.png' );

	ShopMenuItem = AbstractMenuItem.extend({

	    init: function(x, y, w, h, title, image, cost, callback) 
	    {
	    	this.parent(x,y,w,h,callback);

	    	this.title = title;

	    	this.image = new Image;
			this.image.src = image;

	    	this.coin = new Image;
			this.coin.src =  "media/coin_shop.png";

	    	this.cost = cost;

	    	this.textHeight = font.heightForString(this.title);
	    	this.textWidth = font.widthForString(this.title);
	    	this.costTextWidth = font.widthForString(this.cost);
	    	
	        console.log("ShopMenuItem Created");
	    },

	    update: function()
	    {
	    	this.parent();
	    },

	    draw: function()
	    {	
	    	this.parent();

			font.draw( this.title, this.x + this.w/2, this.y, ig.Font.ALIGN.CENTER);

			var ctx = ig.system.context;
			ctx.drawImage(this.image,this.x + this.w/2 - this.image.width/2,this.y + this.h/2 - this.image.height/2);

			ctx.drawImage(this.coin,this.x + this.w/2 - this.costTextWidth/2 - this.coin.width, this.y + this.h - this.coin.height);

			font.draw( this.cost, this.x + this.w/2, this.y + this.h - this.textHeight, ig.Font.ALIGN.CENTER);
	    }
	});

});
