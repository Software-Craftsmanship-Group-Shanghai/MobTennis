var assert = require('assert');
var Match = require('../src/mob-tennis').Match;


describe('mob-tennis', function() {
    var m;
    beforeEach(function(){
        m = new Match();
    });
    it('should display Love All when 0 : 0', function () {
        assert.equal('Love All', m.currentScore());
    });
    it('should display Fifteen Love when 15 : 0', function () {
        m.addPlayer1Score();
        assert.equal('Fifteen Love', m.currentScore());
    });
    it('should display Love Fifteen when 0 : 15', function () {
        m.addPlayer2Score();
        assert.equal('Love Fifteen', m.currentScore());
    });
    it('should display Fifteen All when 15 : 15', function() {
        m.addPlayer2Score();
        m.addPlayer1Score();
        assert.equal('Fifteen All', m.currentScore());
    })



})