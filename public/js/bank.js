var Bank = function(){

  this.questionBank = [

    ["What is 2 + 2?", [3, 5, 4, 2863], 4],
    ["What is 2 + 3?", [2, 3, 5, 8], 5],
    ["What is 1 + 1?", [2, 3, 4, 5], 2],
    ["what is 5 + 5?", [4, 7, 3, 10], 10],
    ["What is 72 + 127?", [18, 199, 197, 198], 199],
    ["What is 12 squared?", [144, 123, 111, 195], 144]
  ];

  this.randomQuestion = 1;

};

Bank.prototype.questions = function(questionNumber){
  var questionArray = this.questionBank[questionNumber];
  return questionArray[0];
};

Bank.prototype.choice1 = function(questionNumber){
  var questionArray = this.questionBank[questionNumber];
  var questionArrayChoice = questionArray[1];
  return questionArrayChoice[0];
};

Bank.prototype.choice2 = function(questionNumber){
  var questionArray = this.questionBank[questionNumber];
  var questionArrayChoice = questionArray[1];
  return questionArrayChoice[1];
};

Bank.prototype.choice3 = function(questionNumber){
  var questionArray = this.questionBank[questionNumber];
  var questionArrayChoice = questionArray[1];
  return questionArrayChoice[2];
};

Bank.prototype.choice4 = function(questionNumber){
  var questionArray = this.questionBank[questionNumber];
  var questionArrayChoice = questionArray[1];
  return questionArrayChoice[3];
};

Bank.prototype.correctAnswer = function(questionNumber){
  var questionArray = this.questionBank[questionNumber];
  return questionArray[2];
};

Bank.prototype.verifyAnswer = function(questionNumber, playersChoice){
  return (this.correctAnswer(questionNumber) === playersChoice);
};

Bank.prototype.deleteQuestion = function(questionNumber) {
  this.questionBank.splice(questionNumber, 1);
};

Bank.prototype.randomChecker = function() {
  this.randomQuestion = Math.floor((Math.random() * 3));
};
