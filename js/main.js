var GuessingGame = function(){

  this.userGuess;
  this.message;
  this.message2;
  this.gameOdds = prompt("I am having people guess a number for a chance to win a virtual prize. If you would like to play, first choose your odds of winning as one in ___");

  this.playGame = function(){
    answer = Math.ceil(Math.random() * this.gameOdds);
    console.log(answer);
    this.userGuess = prompt('Guess a number between 1 and ' + this.gameOdds);
    this.checkGuess();
  };

  this.checkGuess = function(){
    if (this.userGuess == answer) {
      this.message = "We have a winner! Please visit the pretend female assistant to claim your prize!";
      this.collectPrize();
    } else {
      this.message = "Oh no! I\'m sorry but that is incorrect, thank you for participating.";
    }
    this.changeGameText();
  };

  this.collectPrize = function(){

    switch (true) {
      case (this.gameOdds <= 10):
        choosePrize = prompt("Hi, I'm the pretend female assistant. Choose a number corresponding to your prize: 1) A kazoo.");
        this.checkPrize(choosePrize);
        break;
      case (this.gameOdds > 10 && this.gameOdds <= 25):
        choosePrize = prompt("Hi, I'm the pretend female assistant. Choose a number corresponding to your prize: 1) A kazoo, or 2) A goldfish.");
        this.checkPrize(choosePrize);
        break;
      case (this.gameOdds > 25 && this.gameOdds <=50):
        choosePrize = prompt("Hi, I'm the pretend female assistant. Choose a number corresponding to your prize: 1) A kazoo, 2) A goldfish, or 3) A teddy bear.");
        this.checkPrize(choosePrize);
        break;
      case (this.gameOdds > 50 && this.gameOdds <=75):
        choosePrize = prompt("Hi, I'm the pretend female assistant. Choose a number corresponding to your prize: 1) A kazoo, 2) A goldfish, 3) A teddy bear, or 4) A skateboard.");
        this.checkPrize(choosePrize);
        break;
      case (this.gameOdds > 75):
        choosePrize = prompt("Hi, I'm the pretend female assistant. Choose a number corresponding to your prize: 1) A kazoo, 2) A goldfish, 3) A teddy bear, 4) A skateboard, or 5) A bicycle.");
        this.checkPrize(choosePrize);
        break;
    }
  };

  this.checkPrize = function (prizeChoice) {
    if (prizeChoice === "1"){
      this.message2 = "Congratulations, and have fun playing your new kazoo!";
      this.prizeList();
    } else if (prizeChoice === "2") {
      this.message2 = "Congratulations, and enjoy your new goldfish!";
      this.prizeList();
    } else if (prizeChoice === "3") {
      this.message2 = "Congratulations, and enioy your new teddy bear!";
      this.prizeList();
    } else if (prizeChoice === "4") {
      this.message2 = "Congratulations, have fun riding your new skateboard!";
      this.prizeList();
    } else if (prizeChoice === "5") {
      this.message2 = "Congratulations, have fun with your fancy new bike";
      this.prizeList();
    }
  }

  this.changeGameText = function () {
    document.getElementById('game-outcome').innerHTML = this.message;
  }

  this.prizeList = function () {
    document.getElementById('prize-list').innerHTML = this.message2;
  }
};

var newGame = new GuessingGame();
    newGame.playGame();
