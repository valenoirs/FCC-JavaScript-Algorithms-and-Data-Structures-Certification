function rot13(str) {
    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
    const rot13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'];
    const returnArray = [];
    let index;

    for(let i = 0; i < str.length; i++){
        index = rot13.indexOf(str[i]);
        (index >= 0) ? returnArray.push(alpha[index]) : returnArray.push(str[i]);
    }

    return returnArray.join('')
}
  
console.log("SERR PBQR PNZC " + rot13("SERR PBQR PNZC"));
console.log("SERR CVMMN! " + rot13("SERR CVMMN!"));
console.log("SERR YBIR? " + rot13("SERR YBIR?"));
console.log("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT. " + rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));