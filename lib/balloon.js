// class Balloon {
//     constructor() {
//         this.pos = [];
//         this.dpos = [];
//         this.nPos = 200;
//         this.step = 2 * Math.PI / this.nPos;
//         this.radius = 50;
//         this.time = 0;
//         this.generatePos();
//     }

//     draw(ctx) {
//         ctx.lineWidth = 2;
//         ctx.beginPath();
//         ctx.moveTo(window.innerWidth/2 - this.radius, window.innerHeight);
//         for(let i = 1; i < this.nPos; i++) {
//             ctx.lineTo(this.pos[2 * i], this.pos[2 * i + 1]);
//         }
//         ctx.arc(window.innerWidth/2, window.innerHeight - 199 * 2, this.radius, Math.PI, 0, false)
  
//         ctx.stroke();
//     }  

//     generatePos() {
//         let start = [window.innerWidth/2 - this.radius, window.innerHeight]
//         for(let i = 0; i < this.nPos; i++)
//         { 
//           this.pos[2 * i] = window.innerWidth/2 - this.radius
//           this.pos[2 * i + 1] = window.innerHeight - i * 2
//         }
//         console.log(this.pos);
//     }
// }

// export default Balloon;