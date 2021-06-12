class paper{

    constructor(x, y,radius){

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2 
        }

        this.radius=radius;
        //creating a circle
        this.body=Bodies.circle(x,y,radius,options);

        //loading the paper image
        this.image = loadImage("paper.png");
        World.add(world,this.body);

    }

    
    display(){

        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,52,52);

    }
}