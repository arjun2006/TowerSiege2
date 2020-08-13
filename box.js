class Box  {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x, pos.y, this.width, this.height);

    if(box.velocityX<3){
      box.display();
    }
  else{
    tint(255,this.visibility);
  }
  }
};