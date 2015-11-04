/* Author: Luigi Vincent */

var round = 1;
var winningMap = {"rock": "scissors", "paper": "rock", "scissors": "paper"};
game();

function game() {
      var computerChoice = getComputerChoice()
	var userChoice = getUserChoice();
	document.writeln("<b>Round: " + round++ + "</b>");
	document.writeln("<br>Computer chose: " + computerChoice);
	document.writeln("<br>You chose: " + userChoice + "<br>");
      evaluate(userChoice, computerChoice);	
}

function getComputerChoice() {
      var choices = ["rock", "paper", "scissors"];
      return choices[Math.floor(Math.random() * 3)];
}

function getUserChoice() {
      var message = "Do you pick rock, paper, or scissors?";
      var choice = prompt(message);

      while (choice != "rock" && choice != "paper" && choice != "scissors") {
      	choice = prompt("Invalid input!\n" + message);
      }
      return choice;
}

function evaluate(userChoice, computerChoice) {
      if (userChoice == computerChoice) {
            document.writeln("It's a tie!<br><br>");
            game();
      } else if (computerChoice == winningMap[userChoice]) {
            document.write("<h3>You win!!<h3>");
      } else {
           document.write("<h3>Computer wins!<h3>");
      }
}
