var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 99];
var average;
var total = 0;
var highestScore = 0;
var name = "";

  const num1 = 54.95;
  const num2 = .1;
  const result = parseFloat(num1 * num2);
  if (result != (num1 * num2).toFixed(3)) {
      alert("Incorrect");
  }
  else  {
      alert("Correct!");
  }

var $ = function (id) { return document.getElementById(id); };

//validate entries and add to array
  function addScore() {
    $("nameError").innerHTML = ("");
    $("scoreError").innerHTML = ("");
  var nameInput = $("name").value;
  var scoreInput = $("score").value;
  if (nameInput == "" ){
    $("nameError").innerHTML = (" Please enter a name.");
  }
  else if((scoreInput < 0 || scoreInput > 100 )){
    $("scoreError").innerHTML = (" Score must be between 0 and 100.");
  }
  else {
    names[names.length] = nameInput;
    scores[scores.length] = scoreInput;
  }
};

//then calculate the average and highest score
function displayResults() {

  for (var i = 0; i < scores.length; i++) {
    total = total + scores[i];      
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highestScoreName = names[i];

    }
  }
  average = parseInt(total/scores.length);
  $("results_header").innerHTML = ("Results");
  $("results_text").innerHTML = ("\nAverage score is " + average + "<br>" + "\nHigh score = " + highestScoreName + " with a score of " + highestScore);

};

//display scores table
function displayScores() {
  $("scores_header").innerHTML = ("Scores");
  for(var i=0; i < names.length;i++) {
    $("scores").innerHTML = ("<p>"+names[i] + "   " + scores[i] + "<br></p>");
  }
};
