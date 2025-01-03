let boxes = document.querySelectorAll(".box");
let reset1 = document.querySelector("#resetbtn");
let newgame = document.getElementById("newbtn");
let resetbuttom = document.getElementById("resetbtn");
let msgCont = document.querySelector(".win");

PlayerXturn = true;
const win = [
    [0 ,1 ,2],
    [0 ,3 ,6],
    [0 ,4 ,8],
    [1 ,4 ,7],
    [2 ,5, 8],
    [2 ,4 ,6],
    [3 ,4 ,5],
    [6 ,7 ,8],
]

boxes.forEach(b => {
    b.addEventListener("click",()=>{
           if(PlayerXturn){
            b.innerText="X";
            PlayerXturn=false;
           }
           else{
            b.innerText="O";
            PlayerXturn=true;
           }
           b.disabled = true; // It is used to diable box once clicked by user, because once box is clicked user will not be able to change value.
           checkWin()
    })
});

const resetit=()=>{
    PlayerXturn = true;
    enablebox();
    msgCont.classList.add("hide")
}

const enablebox=()=>{
    for (const b1 of boxes) {
        b1.disabled=false;
        b1.innerText= "";
    }
}

const disblebox=()=>{
    for (const b1 of boxes) {
        b1.disabled=true;
    }
}

const showWinner = (e) =>{
    msgCont.innerText=`Winner is ${e}`
    msgCont.classList.remove("hide")
    disblebox()
}

const checkWin=()=>{
    for (const pattern of win) {
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
        let position1value = boxes[pattern[0]].innerText;
        let position2value = boxes[pattern[1]].innerText;
        let position3value = boxes[pattern[2]].innerText;

        if(position1value != "" && position2value != "" && position3value != ""){
            if(position1value == position2value && position2value == position3value){
                console.log('Winner',position1value);
                showWinner(position1value);
            }
        }
    }
}

newgame.addEventListener("click",()=>{
    resetit()
})

resetbuttom.addEventListener("click",()=>{
    resetit()
})
