// @type {HTMLCanvasElement}
const canvas = document.getElementById("canvas")
canvas.width = 1000
canvas.height = 1000
const ctx = canvas.getContext("2d")
const radius = 30
let circleX = canvas.width/2
let circleY = canvas.height/2

function randomNumBetween(min, max){
    let range = max-min
    return Math.floor(Math.random()*range )+min
}
function strokeCircle(x, y, radius,color){
    ctx.strokeStyle = color
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.stroke();
}
function fillCircle(x, y, radius,color){
    ctx.fillStyle = color
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.fill();
}
function coin(x, y){
    strokeCircle(x,y,radius,"red")
    fillCircle(x,y,radius,"gold")
    ctx.textAlign ="center"
    ctx.textBaseLine ="middle"
    ctx.font="25px Arial"
    ctx.fillStyle="silver"
    ctx.fillText("$$$",x,y+8)
}

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    x *= (canvas.width / rect.width);
    y *= (canvas.height / rect.height);

    checkIfCircleClicked(x, y);
});


function checkIfCircleClicked(clickX, clickY) {
    const distance = Math.sqrt((clickX - circleX)**2 + (clickY - circleY)**2);

    if (distance < radius) {
        ctx.save();
        // This makes new shapes "cut holes" in the existing canvas
        ctx.globalCompositeOperation = 'destination-out';
        
        ctx.beginPath();
        // Add +1 or +2 to the radius to catch the blurry edges (anti-aliasing)
        ctx.arc(circleX, circleY, radius + 2, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore(); // Resets back to normal drawing mode
    }
}

coin(circleX,circleY)

// function gameLoop(){
//     ctx.clearRect(0,0,canvas.width,canvas.height)
//     coin(x,y)
//     requestAnimationFrame(gameLoop)
// }

// gameLoop()