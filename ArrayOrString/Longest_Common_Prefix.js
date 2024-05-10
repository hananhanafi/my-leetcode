// 14. Longest Common Prefix
// Solved
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    
    var isCommon = true;
    let count = 0;
    var strResult = "";
    
    while(isCommon && count < strs[0].length){
        for(let i =0;i<strs.length-1;i++){
            
            if(strs[i][count] != strs[i+1][count]){
               isCommon = false;
           }
        }
        if(isCommon){
            strResult+=strs[0][count];
        }
        count++;
    }
    return strResult;
};