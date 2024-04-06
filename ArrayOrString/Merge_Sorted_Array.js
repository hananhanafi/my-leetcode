/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//     let i = m - 1;
//     let j = n - 1;
//     let k = m + n - 1;
//     let l = 0;
//     console.log('aa')
//     while (l<=k){
//         console.log('loop',l)
//         if(nums1[l] > nums2[l]){
//             console.log('i',i)
//             nums1[l] = nums1[i]
//             i--;
//         }else{
//             console.log('j',j)
//             nums1[l] = nums2[j]
//             j--;
//         }
//         l++;
//     }
//     console.log(nums1)
// };
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    var i = m - 1;
    var j = n - 1;
    var k = m + n - 1;
    var l = 0;
    console.log('aa');
    while (l <= k) {
        console.log('loop', l);
        if (nums1[l] > nums2[l]) {
            console.log('i', i);
            nums1[l] = nums1[i];
            i--;
        }
        else {
            console.log('j', j);
            nums1[l] = nums2[j];
            j--;
        }
        l++;
    }
    console.log(nums1);
}
;
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 2);
console.log("AAAAAA");
