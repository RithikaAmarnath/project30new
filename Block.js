class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
  }

    display(){

      if(this.body.speed<3){
      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      fill(995,95,19);
      rect(0, 0, this.width, this.height);
      pop();
    } else {
    push();
    World.remove(world, this.body);
    this.visibility = this.visibility - 1;
    tint(255, this.visibility);
    pop();
}
  
   }
   
}