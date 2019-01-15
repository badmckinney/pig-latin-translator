const translator = require('./../pig-latin.js');
const chai = require('chai');
const should = chai.should();

console.log(translator().translateEng);
describe('Pig Latin Translator', function () {
  it("should return a string in pig Latin when given the string 'Every good boy does fine'", function () {
    const str = "Every good boy does fine";
    const newStr = translator().translateEng(str);
    newStr.should.equal("Every-ay ood-gay oy-bay oes-day ine-fay");
  });

  it("should return a string in pig Latin when given the string 'Butt plugs are stinky'", function () {
    str = "Butt plugs are stinky";
    newStr = translator().translateEng(str);
    newStr.should.equal("utt-Bay ugs-play are-ay inky-stay");
  });

  it("should return a string in English when given the string 'Every-ay ood-gay oy-bay oes-day ine-fay'", function () {
    str = "Every-ay ood-gay oy-bay oes-day ine-fay";
    newStr = translator().translatePig(str);
    newStr.should.equal("Every good boy does fine");
  });

  it("should return a string in English when given the string 'utt-Bay ugs-play are-ay inky-stay'", function () {
    str = "utt-Bay ugs-play are-ay inky-stay";
    newStr = translator().translatePig(str);
    newStr.should.equal("Butt plugs are stinky");
  });
});