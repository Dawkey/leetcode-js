function remove_val(nums,val){
    let k = -1;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){
            k++;
            nums[k] = nums[i];
        }
    }
    return k+1;
}

let arr=[0,1,2,2,3,0,4,2];
console.log( remove_val(arr,2) );
console.log(arr);