const { expect } = require('chai');
const toRoman = require('../roman-numerals');

describe("Num to Roman", () => {
  it("should be I", function () {
    const number = 1;
    const result = toRoman(number)
    expect(toRoman.result(1)).to.equal('I')
  });

  it("should be X", function () {
    const number = 10;
    const result = toRoman(number)
    expect(toRoman.result(10)).to.equal('X')
  });

  it("should be III", function(){
    const number = 3;
    const result = toRoman(number)
    expect(toRoman.result(3)).to.equal('III')
  });

  it("should be XXVIII", function () {
    const number = 28;
    const result = toRoman(number)
    expect(toRoman.result(28)).to.equal('XXVIII')
  });

  it("should be L", function () {
    const number = 50;
    const result = toRoman(number)
    expect(toRoman.result(50)).to.equal('L')
  });

  it("should be M", function () {
    const number = 1000;
    const result = toRoman(number)
    expect(toRoman.result(1000)).to.equal('M')
  });
});
