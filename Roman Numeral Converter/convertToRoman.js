function convertToRoman(num) {
    const decimal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    const roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
    let romanNumber = '';

    for(let i = 12; i >= 0; i--){
        while(num >= decimal[i]){
            romanNumber += roman[i];
            num -= decimal[i];
        }
    }

    return romanNumber;
}
   
   console.log("2 " + convertToRoman(2));
   console.log("3 " + convertToRoman(3));
   console.log("4 " + convertToRoman(4));
   console.log("5 " + convertToRoman(5));
   console.log("9 " + convertToRoman(9));
   console.log("12 " + convertToRoman(12));
   console.log("16 " + convertToRoman(16));
   console.log("29 " + convertToRoman(29));
   console.log("44 " + convertToRoman(44));
   console.log("45 " + convertToRoman(45));
   console.log("68 " + convertToRoman(68));
   console.log("83 " + convertToRoman(83));
   console.log("97 " + convertToRoman(97));
   console.log("99 " + convertToRoman(99));
   console.log("400 " + convertToRoman(400));
   console.log("500 " + convertToRoman(500));
   console.log("501 " + convertToRoman(501));
   console.log("649 " + convertToRoman(649));
   console.log("798 " + convertToRoman(798));
   console.log("891 " + convertToRoman(891));
   console.log("1000 " + convertToRoman(1000));
   console.log("1004 " + convertToRoman(1004));
   console.log("1006 " + convertToRoman(1006));
   console.log("1023 " + convertToRoman(1023));
   console.log("2014 " + convertToRoman(2014));
   console.log("3999 " + convertToRoman(3999));