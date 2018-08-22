let canvasEl = document.getElementById('canvas');
canvasEl.width = document.documentElement.clientWidth;
canvasEl.height = document.documentElement.clientHeight;

const ctx = canvasEl.getContext('2d');

let mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
}

window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    
    console.log(mouse.x, mouse.y);   
});

class Light {
    constructor(options) {
        this.radius = options.radius;
        this.color = options.color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(mouse.x + this.radius, mouse.y + this.radius, this.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = "#FF6A6A";
        ctx.fill();
        requestAnimationFrame(this.draw.bind(this));
    }
}

export default Light;