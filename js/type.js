const replaceStr = (str, index, char) => {
    const strAry = str.split('');
    strAry[index] = char;
    return strAry.join('');
}
console.log(replaceStr('66666', 1, '5'))  // 65666
console.log(replaceStr('55555', 1, '6'))  // 56555