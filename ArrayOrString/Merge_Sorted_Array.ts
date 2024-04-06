/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {        
    let i = 0;
    let j = 0;
    let l = 0;
    const originalNums1 = nums1.slice();
    const originalNums2 = nums2.slice();

    while (l<=m + n - 1){
        if(nums2[j] === undefined) {
            nums1[l] = originalNums1[i]
            i++;
        }
        else if(nums1[i] === undefined) {
            nums1[l] = originalNums2[j]
            j++;
        }
        else if((i <= m - 1 && originalNums1[i] < originalNums2[j])){
            nums1[l] = originalNums1[i]
            i++;
        }else{
            nums1[l] = originalNums2[j]
            j++;
        }
        l++;
    }
};