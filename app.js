let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let trunO = true;//playerx , playero

const winPattren = [
    [0, 1, 2],
    [0, 3, 6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6], 
    [3,4,5], 
    [6,7,8]
];
const resetGame = () => {
    trunO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(trunO){
            //playerO
            box.innerText = "O";
            trunO = false;
        }
        else{//playerX
            box.innerText = "X";
            trunO = true;
        }
        box.disabled = true;

        checkWinner( );
    });
});

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for(let pattren of winPattren){
        let pos1val = boxes[pattren[0]].innerText;
        let pos2val = boxes[pattren[1]].innerText;
        let pos3val = boxes[pattren[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);