function let_pho(str){
  let phone_arr = [["a","b","c"],["d","e","f"],["g","h","i"],["j","k","l"],["m","n","o"],["p","q","r","s"],["t","u","v"],["w","x","y","z"]];
  if(str === ""){
    return [];
  }
  let arr=[];
  for(let i = 0; i < str.length; i++){
    arr.push(phone_arr[parseInt(str[i]) - 2]);
  }
  
  let return_arr = arr.reduce((mon,val)=>{
    let tem_arr = [];
    for(let i = 0; i < mon.length; i++){
      for(let j = 0; j < val.length; j++){
        tem_arr.push(mon[i] + val[j]);
      }
    }
    return tem_arr;
  });
  return return_arr;
}

console.log(let_pho("2"));