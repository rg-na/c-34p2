class Boat {
  constructor(x, y, width, height, boatPos/*, boatAnimation*/) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      label: "boat"
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height 
    this.image = loadImage("./assets/X-wing.png");
    this.boatPosition = boatPos;

    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var isBroken = false
//    var index = floor(this.speed % this.animation.length);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
//    image(/*this.animation[index],*/ 0, this.boatPosition, this.width, this.height);
    noTint();
    pop();
  }
}
