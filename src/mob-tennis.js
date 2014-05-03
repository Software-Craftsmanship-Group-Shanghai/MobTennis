var Match = function() {
  this.player1score = 0;
  this.player2score = 0;

  var scoreMap = {
    '0' : 'Love',
    '1' : 'Fifteen',
    '2' : 'Thirty',
    '3' : 'Forty'
  };

  this.currentScore = function() {
    if(this.player1score === this.player2score) {
        if (this.player1score === 3) {
          return 'DEUCE';
        }         
        return scoreMap[this.player1score] + ' All';
    }

    return scoreMap[this.player1score] + ' ' + scoreMap[this.player2score];
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




