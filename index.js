let dino = document.getElementById("dino-el")
let block = document.getElementById("block-el")
let scoreEl = document.getElementById("score")
let score = 0

scoreEl.innerHTML = "Press Enter key to begin!"
document.body.onkeyup = function(event){
    if(event.keyCode==13){
        document.body.onkeyup = function(e){
            if(e.keyCode==32){
                dino.classList.add("jump")
                setTimeout(function(){
                dino.classList.remove("jump")
                },1000)
            }
        }


    let checkAlive = setInterval(function(){
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
        score++
        scoreEl.innerHTML = "Score: "+score
        if(blockLeft>0 && dinoTop>=100 && blockLeft<=95 && blockLeft>=75){
            
            document.getElementById("alive").muted = true
            alert("Game over!")
            window.location.reload()
            
        }
    },10)
}
}