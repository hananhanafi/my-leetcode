function removeDuplicates2(nums: number[]): number {
    let i = 0;
    let k = 0;
    let pivotNum = nums[0];
    let isPivotTwice = false;
    
    while (i<nums.length-1){
        // for(let j = i;j<nums.length-2;j++){
        //     if(nums[j]===nums[j+1]){
        //         isPivotTwice = true;
        //     }else{

        //     }
        // }
        console.log('loop',i);
        console.log('k',k);
        console.log('nums',nums);
        console.log('pivotNum',pivotNum)
        console.log('isPivotTwice',isPivotTwice)
        if(pivotNum === nums[i+1]){
            if(pivotNum === nums[i-1]){
                nums[i+1] = nums[i+2]
            }

            if(!isPivotTwice){
                // nums[i] = nums[i+1]
                k+=2;
                nums[k] = nums[k+1]
                i+=2
            }else{
                // nums[i-1] = nums[i]
                i++;
            }
            isPivotTwice = true;
            // pivotNum = nums[i]
            // i+=2;
        }else{
            console.log('reset')
            // reset
            pivotNum = nums[i+1];
            isPivotTwice = false;
            k++;
            i++;
        }
        console.log("====================")
        
    }
    console.log(k)
    console.log(nums)
    return k;
};

removeDuplicates2([0,0,1,1,1,1,2,3,3])