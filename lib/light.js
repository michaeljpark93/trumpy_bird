class Light {
    constructor(options) {
        this.pos = options.pos;
        this.radius = options.radius;
        this.color = options.color;
    }

    let mouseX = 0;
    let mouseY = 0;
    
    canvasEl.addEventListener("mousemove", setMousePosition, false);
    
    setMousePosition(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }       

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, 2 * Math.PI, true);
        ctx.fillStyle = "#FF6A6A";
        ctx.fill();
    }
}

export default Light;

// let mouseX = 0;
// let mouseY = 0;

// function startup() {
//     document.getElementById("drawingArea").onmousemove = mouseMove;
//     setInterval("moveBall()",100);

// }

// function mouseMove(evt) {
//     mouseX = evt.clientX;
//     mouseY = evt.clientY;
// }

// function moveBall() {
//     if (ballX > mouseX) {
//         ballX -= 5;
//     } else {
//         ballX += 5;
//     }
//     if (ballY > mouseY) {
//         ballY -= 5;
//     } else {
//         ballY += 5;
//     }
    
//     var canvas = document.getElementById("drawingArea");
//     var ctx = canvas.getContext("2d");
    
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
    
//     ctx.beginPath();
//     ctx.arc(ballX, ballY, 40, 0, 2* Math.PI);
//     ctx.fillStyle = "green";
//     ctx.fill();
//     ctx.lineWidth = 5;
//     ctx.strokeStyle = "red";
//     ctx.stroke();
// }