var assert = require('assert');
var Match = require('../src/mob-tennis').Match;
describe('mob-tennis', function() {
    it('should display Love All when 0 : 0', function () {
        var m = new Match();
        assert.equal('Love All', m.CurrentScore());
    });

    it('should display Fifteen Love when 15 : 0', function () {
        var m = new Match();
        m.Player1Score();
        assert.equal('Fifteen Love', m.CurrentScore());
    })
})