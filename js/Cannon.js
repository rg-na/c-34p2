class Turret {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.turret_image = loadImage("assets/turretImage.png");
    this.turret_base = loadImage("assets/turretBase.png");
  }
  display() {
    if (keyIsDown(RIGHT_ARROW) && this.angle < 0.6) {
      this.angle += 0.01;
    }

    if (keyIsDown(LEFT_ARROW) && this.angle > -1) {
      this.angle -= 0.01;
    }

    fill("#676e6a");
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER)
    image(this.turret_image, 0, 0, this.width, this.height);
    pop();
    image(this.turret_base, 70, 20, 200, 200, PI, TWO_PI);
    noFill();
  }
}
