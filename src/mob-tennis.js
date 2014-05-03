var Match = function() {
  this.player1score = 0;
  this.player2score = 0;

  this.currentScore = function() {
    if(this.player1score != 0 && this.player2score == 0) {
        return 'Fifteen Love';
    }
    if(this.player1score == 1 && this.player2score == 1) {
        return 'Fifteen All';
    }
    return 'Love All';
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




