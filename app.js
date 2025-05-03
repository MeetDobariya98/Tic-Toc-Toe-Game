let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
let count=0;

const resetGame = () =>{
    turn0 = true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("boxs was clicked");
        if(turn0){
            box.innerText="o";
            turn0=false;
        }
        else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;
        count++;

        let isWinner=checkWinner();

        if(count === 9 && !isWinner){
            gameDraw();
        }

        // checkWinner();
    });
});

const gameDraw= ()=>{
    msg.innerText=`game was draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};



const showWinner = (winner) =>{
    alert=msg.innerText=`congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let patterns of winPatterns){
        let postval1= boxes[patterns[0]].innerText;
        let postval2= boxes[patterns[1]].innerText;
        let postval3= boxes[patterns[2]].innerText;

        if(postval1 != "" && postval2 != "" && postval3 != ""){
            if(postval1 === postval2 && postval2 === postval3){
                console.log("winner",postval1);

            showWinner(postval1);
            }
        } 
    }
};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

