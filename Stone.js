class Stone{
    constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options = {
		'density':12,
		'friction': 0.9,
		'restitution':0.8
	  };
		
		
	  this.body = Bodies.rectangle(x,y,width,height,options);
		World.add(world, this.body);

	}
	display()
	{
			//var stonepos=this.body.position;		
			push()
			//translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			rect(0,0,this.width,this.height);
			strokeWeight(4);
			stroke("black");
			fill("grey");
          
			pop()
	}

}


