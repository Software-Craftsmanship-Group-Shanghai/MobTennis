var Match = function() {
  this.player1score = 0;
  this.player2score = 0;

  var scoreMap = {
    '0:0' : 'Love All',
    '1:0' : 'Fifteen Love',
    '0:1' : 'Love Fifteen',
    '1:1' : 'Fifteen All'
  };

  this.currentScore = function() {
    var key = this.player1score + ':' + this.player2score;
    return scoreMap[key];
  }

  this.addPlayer1Score = function() {
    this.player1score++;
  }

  this.addPlayer2Score = function() {
    this.player2score++;
  }
};

if(typeof(exports) !== 'undefined') {
    exports.Match = Match;
}




