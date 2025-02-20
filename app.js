let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
const newBtn=document.querySelector("#new-game");
let msg=document.querySelector("#msg");
let turn0=true;
let msgContainer=document.querySelector(".msg-container")
let cnt=0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){//player o
            box.innerHTML="O";
            turn0=false;
        }
        else{//player X
            box.innerHTML="X";
            turn0=true;
        }
        cnt++;
        console.log(cnt);
        box.disabled=true;
        let isWinner=checkWinner(); 
        
        if(cnt==9 && !isWinner){
            gameDraw();
        }
    });
});
const gameDraw=()=>{
    msg.innerText=`Game was a Draw`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
    
};
const disabledBoxes=()=>{
for(let box of boxes){
    box.disabled=true;
}
}
const displayWinner=(winner)=>{
    msg.innerText=`Congratulations! The winner is ${winner}
    `
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerHTML;
        let pos2Val=boxes[pattern[1]].innerHTML;
        let pos3Val=boxes[pattern[2]].innerHTML;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner", pos1Val);
                displayWinner(pos1Val);

            }
        }
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    } 
}

const reset_game=()=>{
    turn0=true;
    enableBoxes();
    // boxes.classList.add("hide");
    msgContainer.classList.add("hide");

}


reset.addEventListener("click",reset_game);
newBtn.addEventListener("click",reset_game);