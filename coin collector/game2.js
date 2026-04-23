// @type {HTMLCanvasElement}
const canvas = document.getElementById("canvas")
canvas.width = innerWidth
canvas.height = innerHeight
const ctx = canvas.getContext("2d")
const radius = 30
let circleX = canvas.width/2
let circleY = canvas.height/2
let sunGs = document.getElementById("sunglasses")
let sunGsOn = false
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
function drawCoin(x, y, radius,color,borderColor){
    strokeCircle(x,y,radius,borderColor)
    fillCircle(x,y,radius,color)
}
function coin(x, y,radius){
    drawCoin(x,y,radius,"gold","red")
    ctx.textAlign ="center"
    ctx.textBaseLine ="middle"
    ctx.font="25px Arial"
    ctx.fillStyle="silver"
    ctx.fillText("$$$",x,y+8)
    console.log("coin position: ", x, y)
    if(sunGsOn==true){
        ctx.drawImage(sunGs,x-radius+2,y-60,radius*2,radius*2)
    }
}
const crown = document.getElementById("item2")
const sunglasses = document.getElementById("item3")
sunglasses.addEventListener("click",PutSunGsOn)
function PutSunGsOn(){
    sunGsOn=true
}
let x =309
let y =80
let score = 0
let miss =0
let coinValue=1
let scoreDisplay = document.getElementById("score")
coin(x,y,radius)
document.addEventListener("click",(e)=>{
    console.log(e.clientX,":",e.clientY,"mouse position: ")
    let rect = canvas.getBoundingClientRect()
    console.log(rect.x,":",rect.y,"canvas position: ")
    let mouseX = e.clientX - rect.x 
    let mouseY = e.clientY - rect.y 
    let dx = x - mouseX
    let dy = y - mouseY
    if(Math.hypot(dx,dy)<radius){
        ctx.fillStyle="white"
        ctx.fillRect(0,0,canvas.width,canvas.height)
        x =randomNumBetween(0, canvas.width)
        y =randomNumBetween(0, canvas.height)
        coin(x,y,radius)
        score += coinValue
        console.log(score)
        scoreDisplay.innerHTML = `Score: ${score} | Misses: ${miss}`
        
    }
    else{
        miss++ 
        scoreDisplay.innerHTML = `Score: ${score} | Misses: ${miss}`
        console.log(miss)
    }
}
)                                        
// const 
crown.addEventListener("click", (e)=>{
    coinValue = coinValue*2
})