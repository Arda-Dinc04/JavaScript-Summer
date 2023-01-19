//Add to Array button
/*const addArray = () => {

    addArrays();
};
document.addEventListener("DOMContentLoaded", () => {$(
    "#add").addEventListener("click", addArray)});

//Display Scores button
const displayScore = () => {
    displayScores();
};
document.addEventListener("DOMContentLoaded", () => {$(
    "#displayScore").addEventListener("click", displayScore)});

//Display Results button
const displayResult = () => {
    displayResults();
};

document.addEventListener("DOMContentLoaded", () => {$(
    "#displayResults").addEventListener("click", displayResult)});
*/

var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 99];

//var names  = new Array();
//var scores  = new Array();
var highestScoreName = "";
var total = 0;

var $ = function (id) { return document.getElementById(id); };

//responsible for checking if userInput is correct and adding to array
function addScore() {
  var nameInput = $("nameInput").value;
  var scoreInput = $("scoresInput").value;
  if (nameInput == "" || scoreInput == ""){
    alert("You must enter a valid name.");
  }
  else if(scoreInput < 0 || scoreInput > 100 ){
    alert("You must enter a score.");
  }
  else {
    names[names.length] = nameInput;
    scores[scores.length] = scoreInput;
  }
}

function displayResults(){
    
    for (var i = 0; i < scores.length; i++) {
        total += scores[i];      
        if (scores[i] > highestScore) {
          highestScore = scores[i];
          highestScoreName = names[i];
        }
      }

        average = parseInt(total/scores.length);
        $("results_header").innerHTML = ("Results");
        $("results_text").innerHTML = ("\nAverage score is " + average + "<br>" + "\nHigh score = " + highestScoreName + " with a score of " + highestScore);

    }   