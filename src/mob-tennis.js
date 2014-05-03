var Match = function() {
  this.player1score = 0;

  this.currentScore = function() {
    if(this.player1score != 0) {
        return 'Fifteen Love';
    }
    return 'Love All';
  }

  this.addPlayer1Score = function() {
    this.player1score++;
  }
};

if(typeof(exports) !== 'undefined') {
    exports.Match = Match;
}




