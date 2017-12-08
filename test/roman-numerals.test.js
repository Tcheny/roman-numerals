const { expect } = require('chai');
const toRoman = require('../roman-numerals');

describe("Num to Roman", () => {
    beforeEach(function() {
      roman = new toRoman();
    });

  it("should be I", function () {
    expect(roman.result(1)).to.equal('I')
  });

  it("should be X", function () {
    expect(roman.result(10)).to.equal('X')
  });

  it("should be III", function(){
    expect(roman.result(3)).to.equal('III')
  });

  it("should be XXVIII", function () {
    expect(roman.result(28)).to.equal('XXVIII')
  });

  it("should be L", function () {
    expect(roman.result(50)).to.equal('L')
  });

  it("should be M", function () {
    expect(roman.result(1000)).to.equal('M')
  });
});
