let canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
ctx.fillRect(90,90,90,90)
let x = Math.random(Math.floor())*800
let y = Math.random(Math.floor())*800
function gameLoop(){
    ctx.clearRect(0,0,1000,1000)
    ctx.fillStyle = "red"
    ctx.fillRect(x,y,90,90)
    ctx.font="50px Arial"
    ctx.fillStyle = "navy"
    ctx.fillText(x, 200 , 300)
    ctx.fillStyle = "green"
    ctx.fillText(y, 200 , 450)
    //x++

    requestAnimationFrame(gameLoop)
}
let moove = document.getElementById("moove")
document.addEventListener("keydown", (e)=>{
   if(e.key == "ArrowRight"){
     x+=10
   } 
})
let up = document.getElementById("up")
document.addEventListener("keydown", (e)=>{ 
   if(e.key == "ArrowUp"){
    y-=10
   }
})
let left = document.getElementById("left")
document.addEventListener("keydown", (e)=>{
    if(e.key == "ArrowLeft"){
        x-=10 
    }
})
let down = document.getElementById("down")
document.addEventListener("keydown", (e)=>{
   if(e.key=="ArrowDown"){
        y+=10 
   } 
})
gameLoop()