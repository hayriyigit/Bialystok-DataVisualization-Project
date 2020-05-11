function LetterArray(length){
    return Array.apply(null, {length})
    .map(function (x,i) { return String.fromCharCode(97 + i) });
}

module.exports = LetterArray;