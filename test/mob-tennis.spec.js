var assert = require('assert');
var Match = require('../src/mob-tennis').Match;


describe('mob-tennis', function() {
    var m;
    beforeEach(function(){
        m = new Match();
    });

    var setScore = function (p1Score, p2Score){
        var i;
        for (i = 0 ; i < p1Score ; i++)
            m.addPlayer1Score();
        for (i = 0 ; i < p2Score ; i++)
            m.addPlayer2Score();
    };
    it('should display Love All when 0 : 0', function () {
        assert.equal('Love All', m.currentScore());
    });
    it('should display Fifteen Love when 15 : 0', function () {
        setScore(1, 0);
        assert.equal('Fifteen Love', m.currentScore());
    });
    it('should display Love Fifteen when 0 : 15', function () {
        setScore(0, 1);
        assert.equal('Love Fifteen', m.currentScore());
    });
    it('should display Thirty Love when 30 : 0', function () {
        setScore(2, 0);
        assert.equal('Thirty Love', m.currentScore());
    });
    it('should display Fifteen All when 15 : 15', function() {
        setScore(1, 1);
        assert.equal('Fifteen All', m.currentScore());
    });
    it('should display Forty Thirty when 40 : 30', function () {
        setScore(3, 2);
        assert.equal('Forty Thirty', m.currentScore());
    });
})