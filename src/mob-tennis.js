exports.Match = function() {
  this.player1score = 0;

  this.CurrentScore = function() {
    if(this.player1score != 0) {
        return 'Fifteen Love';
    }
    return 'Love All';
  }

  this.Player1Score = function() {
    this.player1score++;
  }
}

