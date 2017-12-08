const { expect } = require('chai');
const toRoman = require('../roman-numerals');

describe('Num to Roman', () => {
  it('should be I', function () {
    expect(toRoman.result(1)).to.equal('I');
  });

  it('should be X', function () {
    expect(toRoman.result(10)).to.equal('X');
  });

  it('should be III', function () {
    expect(toRoman.result(3)).to.equal('III');
  });

  it('should be XXVIII', function () {
    expect(toRoman.result(28)).to.equal('XXVIII');
  });

  it('should be L', function () {
    expect(toRoman.result(50)).to.equal('L');
  });

  it('should be M', function () {
    expect(toRoman.result(1000)).to.equal('M');
  });
});
