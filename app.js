let gameseq=[];
let userseq=[];
let btns=["one","two","three","four"];
let started=false;
let level=0;
let h3= document.querySelector("h3");


document.addEventListener("keypress",function(){
if(started==false){
    console.log(`game started`);
     started=true;

     levelup();
}
});


function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    },250)

}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    },250)

}

function levelup(){
    userseq=[];
    level++;
    h3.innerText=`level ${level}`;
    let randind =Math.floor(Math.random()*3);
    let randcolor=btns[randind];
    let randbtn= document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    btnflash(randbtn);

}

function checkans(ind){
    if(userseq[ind]===gameseq[ind]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
        
    }else{
        h3.innerText=`GAMEOVER! you scored ${level-1}! `;
        
        reset();
    }

}

function btnpress(){
    console.log("button was pressed");
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}
 let allbtn=document.querySelectorAll(".box");
 for(btn of allbtn){
    btn.addEventListener("click",btnpress);
 }

 function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
 }