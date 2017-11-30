var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1score = 0;
var p2score = 0;
var scoreDisplay1 = document.querySelector("#score1");
var scoreDisplay2 = document.querySelector("#score2");
var winningScore = 5;
var gameOver = false;
var playingToInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

p1.addEventListener("click", function(){
	if(!gameOver){
		p1score++;
		updateScore();
		isWinner();
	}
});

p2.addEventListener("click", function(){
	if(!gameOver){
		p2score++;
		updateScore();
		isWinner();
	}
});

reset.addEventListener("click", function(){
	resetScore();
	updateScore();
});

playingToInput.addEventListener("change", function(){
	winningScore = this.value;
	winningScoreDisplay.textContent = winningScore;
	resetScore();
	updateScore();
});

function updateScore(){
	scoreDisplay1.textContent = p1score;
	scoreDisplay2.textContent = p2score;
}

function resetScore(){
	p1score=0;
	p2score=0;
	scoreDisplay1.classList.remove("winner");
	scoreDisplay2.classList.remove("winner");
	gameOver = false;
}

function isWinner(){
	if(p1score == winningScore){
		scoreDisplay1.classList.add("winner");
		gameOver = true;
	}else if(p2score == winningScore){
		scoreDisplay2.classList.add("winner");
		gameOver = true;
	}
}







