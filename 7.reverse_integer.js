function rev_int(num){
  let return_num = 0;
  while(num !== 0){
    let left_num = num % 10;
    num = parseInt(num / 10);
    return_num = return_num * 10 + left_num;
  }
  if(return_num > 2147483647 || return_num < -2147483648){
    return 0;
  }
  return return_num;
}

console.log(rev_int(123));