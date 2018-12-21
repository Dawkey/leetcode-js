function remove_same(nums){
    let k = 0;

    for(let i=1; i<nums.length; i++){
        if(nums[i] !== nums[i-1]){
            k++;
            nums[k] = nums[i];
        }
    }

    return k + 1;
}