let gameSeq=[];
let userSeq=[];
let btns=['yellow','red','green','purple'];
let started =false;
let level=0;
 let h2=document.querySelector("h2");
 let max=-1;
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started=true;
        levelUp();
    }
    
});
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
}

function levelUp(){
    userSeq=[];
    level++;
   h2.innerText=`level ${level}`;
   let randInx=Math.floor(Math.random()*3);
   let randColor=btns[ randInx];
   let randBtn=document.querySelector(`.${randColor}`);
//    console.log(randInx);
//    console.log(randColor);
//    console.log(randBtn);
   gameSeq.push(randColor);
   console.log(gameSeq);
   btnFlash(randBtn);
}
function checkAns(indx){
    console.log("crr level:",level);
    if(userSeq[indx]===gameSeq[indx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{

         if(max<level){
             max=level;
         }
         h2.innerHTML=`Game over!Your score was" <b>${level}</b>"<br> Press any key to start.<br> your highest score was ${max} `;  
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
           document.querySelector("body").style.backgroundColor="white"; 
           
         },150);
        reset();
    }
}
function btnPress() {
    console.log(this);
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
