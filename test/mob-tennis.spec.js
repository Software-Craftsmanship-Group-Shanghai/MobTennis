var assert = require('assert');
var Match = require('../src/mob-tennis').Match;
describe('mob-tennis', function() {
    describe('joseph', function() {
        it('should display love all when 0 : 0', function () {
            var m = new Match();
            assert.equal('Love All', m.CurrentScore());
        });
    });
})