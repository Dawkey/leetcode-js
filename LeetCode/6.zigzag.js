function zigzag(s,numRows){
  if(numRows === 1){
    return s;
  }
  let arr = s.split("");
  let str_arr = [];

  for(let i = 0; i< numRows; i++){
    str_arr.push("");
  }

  arr.forEach((value,index)=>{
    let row = index % (numRows - 1);
    let flag = parseInt(index / (numRows - 1));
    if(row === 0){
      if(flag % 2 === 0){
        str_arr[0] += value;
      }else{
        str_arr[numRows - 1] += value;
      }
    }

    else if(row !== 0){
      if(flag % 2 === 0){
        str_arr[row] += value;
      }else{
        str_arr[numRows - 1 - row] += value;
      }
    }
  });
  
  return str_arr.join("");
}

console.log(zigzag("paypalishiring",3));