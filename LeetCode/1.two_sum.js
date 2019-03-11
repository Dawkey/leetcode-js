function two_sum(nums,target){
  let map = new Map();
  for(let i=0; i<nums.length; i++){
    let key = target - nums[i];
    if(map.has(key)){
      return [map.get(key),i];
    }
    map.set(nums[i],i);
  }
  return [];
}

console.log(two_sum([1,1,3,4,6,7,2,9],9));