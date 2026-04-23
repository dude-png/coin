const coin =document.getElementById('coin')
coin.addEventListener('click',floatScore)
function floatScore(){
    let float = document.createElement("div")
    float.className="float"
    document.body.appendChild(float)
    let top = 250
    let left = window.innerWidth/2
    let  font = Math.random()*100
    let opacity = 1
    float.style.fontSize=font+'px'
    left+=Math.random()*100-50
    top+=Math.random()*100-50
    let r = Math.random()*255
    let g = Math.random()*255
    let b = Math.random()*255
    float.style.color= `rgb(${r}, ${g}, ${b})`
    setInterval(()=>{
        float.innerText = '+1'
        float.style.left = left+'px'
        float.style.top = top+'px'
        top -= 1
        opacity-= 0.009
        float.style.opacity = opacity
        if(opacity<0){float.remove()}
    }, 20)
}
