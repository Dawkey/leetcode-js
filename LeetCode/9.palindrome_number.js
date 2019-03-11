function pal_num(num){
  if(num < 0){
    return false;
  }
  let str = String(num);
  if(str.length === 1){
    return true;
  }
  let length = parseInt(str.length/2);
  for(let i = 0; i < length; i++){
    if(str[i] !== str[str.length - 1 - i]){
      return false;
    }
    if(i === length - 1){
      return true;
    }
  }
}

console.log(pal_num(121));