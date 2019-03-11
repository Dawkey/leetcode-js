function threeSum(arr){
  arr.sort((a,b)=>{return a-b});
  let ret_arr = [];
  
  for(let i = 0; i<arr.length; i++){
    if(arr[i] > 0){
      break;
    }

    if(i !== 0 && arr[i] === arr[i - 1]){
      continue;
    }

    let target = -arr[i];

    let j = i + 1;
    let k = arr.length - 1;
    while(j < k){
      let sum = arr[j] + arr[k];
      if(sum === target){
        ret_arr.push([arr[i],arr[j],arr[k]]);
        do{
          j++;
        }while(arr[j] === arr[j-1] && j < k)
      }
      else if(sum < target){
        do{
          j++;
        }while(arr[j] === arr[j-1] && j < k)
      }
      else if(sum > target){
        do{
          k--;
        }while(arr[k] === arr[k+1] && k > j)
      }
    }

  }

  return ret_arr;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
