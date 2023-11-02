const player = Math.floor( Math.random() * 6 ) +1;
const computer = Math.floor( Math.random() * 6 ) +1;

console.log("player: ", player);
console.log("computer: ", computer);

if(player > computer) {
    alert("Player WINS!");
} else if(computer > player) {
    alert("Computer WINS!");
} else {
    alert("DRAW");
}
