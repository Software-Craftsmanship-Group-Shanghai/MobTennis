var Match = function() {
  this.player1score = 0;
  this.player2score = 0;

  var scoreMap = [
      'Love',
      'Fifteen',
      'Thirty',
      'Forty'
    ];

  this.currentScore = function() {

    if (this.isDeuce()) {
          return 'DEUCE';
    }  
    if(this.player1score === 4 && this.player2score === 3) {
        return 'Joseph Adv';
    }
    if(this.isDraw()) {
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

  this.isDraw = function() {
    return this.player1score === this.player2score;
  }
  this.isDeuce = function() {
    return this.player1score >= 3 && this.isDraw();
  }
};



if(typeof(exports) !== 'undefined') {
    exports.Match = Match;
}




