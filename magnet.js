class Magnet {
  constructor(x, y, r, force) {
    this.pos = createVector(x, y);
    this.r = r;
    this.forceMag = force;
    this.density = 1;
    this.volume = 4 * Math.PI * Math.pow(this.r, 3) / 3;
    this.mass = this.volume * this.density;
  }

  show() {
    ctx.fillStyle = this.forceMag >= 0 ? 'green' : 'red';
    ctx.ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }

  update() {
    this.show();
  }

  applyForce(particles) {
    for (let particle of particles) {
      let force = Vector.subtract(this.pos, particle.pos);
      let distSq = constrain(Math.pow(force.mag(), 2), 25, 500);
      force.setMag(gU * this.mass * particle.mass / distSq);
      particle.vel.add(force.mult(this.forceMag));
    }
  }
}