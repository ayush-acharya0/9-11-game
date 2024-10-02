var character=document.querySelector(".character");
var block=document.querySelector(".block");
var game=document.querySelector(".game");
var image=document.querySelector(".gameover");
var audio =document.querySelector("#audio");




//for click to jump
/*function jump(){
   
    if(!(character.classList.contains("animate")))
    {
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        },400);
    }
}*/

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") { // Trigger jump on space key
      audio.play();
      if (!character.classList.contains("animate")) { 
        character.classList.add("animate");

        setTimeout(function() {
          character.classList.remove("animate");
        }, 800); // 0.8s same as animation duration
          
      }
    }
  });
  
  
var checkDead = setInterval(function() {
    let container=document.querySelector(".container");
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<75 && blockLeft>-10 && characterTop>=150){
        block.style.animation = "none";
        image.style.display="block";
        block.style.display="none";
        character.style.display="none";  
       
    }
   
},10)


setTimeout(function(){
   block.classList.add("banimate")
},300);

function retry(){
    
    block.style.animation= "run 1.5s infinite linear";
    image.style.display="none";
    block.style.display="block";
    character.style.display="block";
    
}

