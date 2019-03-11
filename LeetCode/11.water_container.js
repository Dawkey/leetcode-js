function wat_con(arr){
  let i = 0;
  let j = arr.length - 1;
  let S = 0;
  while(i < j){
    if(arr[i] < arr[j]){
      h = arr[i];
      i = i + 1;
    }else{
      h = arr[j];
      j = j - 1;
    }
    S = Math.max((j - i + 1) * h,S);
  }
  return S;
}

console.log(wat_con([2,3,4,5,18,17,6]));
