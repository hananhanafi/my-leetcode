
// Code
// Note
// Note
// Testcase
// Testcase
// Test Result
// 135. Candy
// Solved
// Hard
// Topics
// Companies
// There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.

 

// Example 1:

// Input: ratings = [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
// Example 2:

// Input: ratings = [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
// The third child gets 1 candy because it satisfies the above two conditions.
 

// Constraints:

// n == ratings.length
// 1 <= n <= 2 * 10^4
// 0 <= ratings[i] <= 2 * 10^4


function candy(ratings: number[]): number {
    let totalCandies = 0;
    let candyGiven = 1;
    let len = ratings.length;
    let ltrCandies = Array(len).fill(1);
    let rtlCandies = Array(len).fill(1);
    
    for(let i = 1;i<ratings.length;i++){
        if(ratings[i] > ratings[i-1]){
            candyGiven++; 
        }else{
            candyGiven=1;
        }
        ltrCandies[i] = candyGiven;
    }
    
    candyGiven = 1;
    for(let i=len-1; i>=0; i--){
        if(ratings[i] > ratings[i+1]){
            candyGiven++;
        }else{
            candyGiven=1;
        }
        rtlCandies[i] = candyGiven;
    }

    for(let i = 0;i<ratings.length;i++){
        if(ratings[i] > ratings[i+1]){
            if(ratings[i] > ratings[i-1]){
                if(ltrCandies[i] > rtlCandies[i]){
                    totalCandies+=ltrCandies[i];
                }else{
                    totalCandies+=rtlCandies[i];
                }
            }else{
                totalCandies+=rtlCandies[i];
            }
        }else{
            totalCandies+=ltrCandies[i];
        }
    }

    return totalCandies
};