let obj = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

function rom_int(str){
  let num=0;
  for(let i = 0; i<str.length; i++){
    let cur_num = obj[str[i]];
    let pre_num = i === 0 ? 0 : obj[str[i-1]];
    if(cur_num > pre_num){
      cur_num -= 2 * pre_num;
    }
    num += cur_num;
  }
  return num;
}

console.log(rom_int("IV"));