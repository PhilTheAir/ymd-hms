var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var y = require('..').ymd;
var Z = require('..').hms;

describe('fake suite of tests', function() {
  it('has 2 equal to be greater than 0', function() {
    expect(2).to.be.above(0);
  });

  it('has 1 equal to 1', function() {
    expect(1).to.equal(1);
  });
});

describe('yyyymmdd and hhmmss', function() {

  var d, h;
  
  beforeEach(function() {
    d = y.yyyymmdd();
    var z = new Z();
    h = z.hhmmss();
  });

  afterEach(function() {
  });

  it('returns yyyy-mm-dd and hh:mm:ss format', function() {
    expect(d.length).to.equal(8);
    expect(h.length).to.equal(8);
  });

});
