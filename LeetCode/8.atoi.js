function atoi(str){
  let flag = false;
  let first_index,last_index;
  for(let i=0; i<str.length; i++){
    if(flag === false){
      if(! /[\s0-9\-\+]/.test(str[i])){
        return 0;
      }
      else if(str[i] !== " "){
        flag = true;
        first_index = i;
        last_index = i + 1;
      }
    }
    else{
      if(! /[0-9]/.test(str[i])){
        last_index = i;
        break;
      }
      if(i === str.length - 1){
        last_index = i + 1;
        break;
      }
    }
  }

  let num_str = str.substr(first_index,last_index - first_index);
  if(num_str === "-" || num_str === "+"){
    return 0;
  }
  let num = +num_str;
  if(num > 2147483647){
    return 2147483647;
  }
  if(num < -2147483648){
    return -2147483648;
  }
  return num;
}

console.log(atoi("  -123"));