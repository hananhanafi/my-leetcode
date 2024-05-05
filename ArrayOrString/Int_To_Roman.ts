// 12. Integer to Roman
// Solved
// Medium
// Topics
// Companies
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

 

// Example 1:

// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.
// Example 2:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 3:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

function intToRoman(num: number): string {
    const romanDict = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    }
    
    let ans = "";
    let ext = 1000;
    
    let i = 1;
    while(num>0){
        const currentBuffer = Math.floor(num/ext);
        const subBuff = ext > 100 ? 100 : ext > 10 ? 10 : 1;

        if(currentBuffer>=1 || (ext===1 && currentBuffer!==4)) {
            num = num - (currentBuffer * ext);
            ans = ans + romanDict[ext].repeat(currentBuffer)
        }

        const currentBuffer2 = num/ext;
        
        if(currentBuffer2 >= 0.9 && i%2 !== 0){
            num = num - (0.9 * ext);
            ans = ans + romanDict[subBuff] + romanDict[ext];
        }else if(currentBuffer2 >= 0.8 && i%2 === 0){
            num = num - (0.8 * ext);
            ans = ans + romanDict[subBuff] + romanDict[ext];
        }

        if(i%2 === 0) ext = ext/5;
        else ext = ext/2;
        i++;
    }

    return ans;
};