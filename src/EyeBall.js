class Eye {
    constructor(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
    draw() {
      // draw eye
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, Math.PI * 2, true);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.closePath();
  
      //draw iris
  
      //draw pupil
  
      //draw pupil reflection
  
      //draw mouse
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 25, 0, Math.PI * 2, true);
      ctx.fillStyle = "gold";
      ctx.fill();
      ctx.closePath();
    }
  }