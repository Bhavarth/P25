class Bin{
    constructor(x,y){

        var options= {
            isStatic:true,
            
        }
        this.x= x;
        this.y= y;
        this.bodyleft= Bodies.rectangle(this.x-60,this.y-40,20,100,options)
        this.bodyright = Bodies.rectangle(this.x+60,this.y-40,20,100,options)
        this.bodybottom = Bodies.rectangle(this.x,this.y,100,20,options)
        this.image=loadImage("sprites/dustbin.png")
        World.add(world,this.bodyleft)
        World.add(world,this.bodyright)
        World.add(world,this.bodybottom)
    }
    display(){
        var angle1 = this.bodyleft.angle;
    push();
    translate(this.bodyleft.position.x, this.bodyleft.position.y);
    rotate(angle1);
    fill("blue")
    rectMode(CENTER);
    rect(0,0,20,100)
    //imageMode(CENTER)
    //image(this.image , 0, 0, this.width, this.height);
    pop();
    var angle2 = this.bodyleft.angle;
    push();
    translate(this.bodyright.position.x, this.bodyright.position.y);
    rotate(angle2);
    fill("blue")
    rectMode(CENTER);
    rect(0,0,20,100)
    //imageMode(CENTER)
    //image(this.image , 0, 0, this.width, this.height);
    pop();
    var angle3 = this.bodyleft.angle;
    push();
    translate(this.bodybottom.position.x, this.bodybottom.position.y);
    rotate(angle3);
    fill("blue")
    //rectMode(CENTER);
    //rect(0,0,100,20)
    imageMode(CENTER)
    image(this.image , 0, 0, this.width, this.height);
    pop();
    }
}