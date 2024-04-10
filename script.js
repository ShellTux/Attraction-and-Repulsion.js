let cv, ctx;
let mouseX = 0;
let mouseY = 0;
let magnets = [];
let particles;
const gU = 6.67 * Math.pow(10, -2.5);

window.onload = function() {
  setup();
};

const setup = function() {
  cv = document.querySelector('canvas');
  ctx = cv.getContext('2d');
  window.addEventListener('mousedown', function(event) {
    console.log(event);
    mouseX = event.clientX - cv.offsetLeft;
    mouseY = event.clientY - cv.offsetTop;
    magnets.push(new Magnet(mouseX, mouseY, 5, 0.1 * Math.pow(-1, event.buttons + 1)));
  })
  particles = Array(10).fill().map(p => new Particle(random(cv.width), random(cv.height), 2))
  setInterval(draw, 10);
};

const draw = function() {
  background(cv, 'black');
  magnets.forEach(magnet => magnet.show());
  particles.forEach(particle => particle.show());
  magnets.forEach(magnet => magnet.applyForce(particles));
  particles.forEach(particle => particle.move());
}