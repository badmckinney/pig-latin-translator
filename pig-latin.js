"use strict";

module.exports = () => {
  const strEng = "The quick brown fox jumped over the lazy dog";
  const strPig = "e-Thay uick-qay own-bray ox-fay umped-jay over-ay e-thay azy-lay og-day";
  let vowels = ["a", "e", "i", "o", "u"];

  //Translate English to Pig Latin
  const translateEng = (str) => {
    let words = str.trim().split(" ");
    let translated = [];
    words.forEach(word => {
      if (vowels.includes(word[0].toLowerCase())) {
        word += "-ay";
        translated.push(word);
        return;
      } else {
        for (let i = 0; i < word.length; i++) {
          if (vowels.includes(word[i].toLowerCase())) {
            let pre = word.slice(i);
            let post = word.slice(0, i);
            word = `${pre}-${post}ay`;
            translated.push(word);
            return;
          }
        }
      }
      return words;
    });
    console.log(translated.join(" "));
    return translated.join(" ");
  };

  //Translate Pig Latin to English
  const translatePig = (str) => {
    debugger;
    let words = str.trim().split(" ");
    let translated = [];
    words.forEach(word => {
      let hyphen = word.indexOf("-");
      if (vowels.includes(word[hyphen + 1].toLowerCase())) {
        word = word.slice(0, hyphen);
        translated.push(word);
        return;
      } else {
        let post = word.slice(0, hyphen);
        let pre = word.slice(hyphen + 1, word.length - 2);
        word = `${pre}${post}`;
        translated.push(word);
        return;
      }
    });
    console.log(translated.join(" "));
    return translated.join(" ");
  };

  return {
    translateEng,
    translatePig
  }
};


