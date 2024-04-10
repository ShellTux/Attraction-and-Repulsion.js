class Particle {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.r = r;
    this.density = 1;
    this.volume = 4 * Math.PI * Math.pow(this.r, 3) / 3;
    this.mass = this.volume * this.density;
  }

  show() {
    ctx.fillStyle = 'white';
    ctx.ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }

  move() {
    this.pos.add(this.vel);
  }

  update() {
    this.show();
  }
}