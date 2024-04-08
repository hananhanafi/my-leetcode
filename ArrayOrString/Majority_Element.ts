function majorityElement(nums: number[]): number {
    let candidate = nums[0];
    let indexCandidate = 0;
    let minMajority = Math.ceil(nums.length/2);
    let findMajority = false;

    while(!findMajority){
        let count = 0;
        let findNextCandidate = false;
        for(let i = indexCandidate; i<nums.length; i++){
            if(candidate === nums[i]){
                count++;
            }
            else if(!findNextCandidate){
                indexCandidate = i;
                findNextCandidate = true;
            }

            if(count>=minMajority){
                findMajority = true;
                break;
            }
        }
        
        if(count<minMajority){
            candidate = nums[indexCandidate]
        }
            
    }

    return candidate
};

majorityElement([2,2,1,1,1,2,2])