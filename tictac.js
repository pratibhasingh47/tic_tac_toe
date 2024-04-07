let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#btn");
let newbtn = document.querySelector("#newbtn");
let mc = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winp = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 7],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enablebox();
    mc.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let iswin = checkWinner();
        if(count === 9 && !iswin){
            draw();
        }
    });
});

const draw =()=>{
    msg.innerText ="Oops ! -_- It is tie";
    mc.classList.remove("hide");
    disablebox();
}

const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations ! Winner is ${winner}`;
    mc.classList.remove("hide");
    disablebox();
};



const checkWinner = () => {
    for (let pattern of winp) {
        /*console.log(pattern[0],pattern[1],pattern[2]);*/

        let p1v = boxes[pattern[0]].innerText;
        let p2v = boxes[pattern[1]].innerText;
        let p3v = boxes[pattern[2]].innerText;

        if (p1v != "" && p2v != "" && p3v != "") {
            if (p1v === p2v && p2v === p3v) {
                console.log("Winner");
                showWinner(p1v);
                return true;
            }
        }
    }
};

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
