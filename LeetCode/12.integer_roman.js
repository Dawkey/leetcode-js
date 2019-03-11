class Obj{
  constructor(i,v,x){
    this[0] = "";
    this[1] = i;
    this[2] = this[1] + i;
    this[3] = this[2] + i;
    this[4] = i + v;
    this[5] = v;
    this[6] = this[5] + i;
    this[7] = this[6] + i;
    this[8] = this[7] + i;
    this[9] = i + x;
  }
}

let obj = {};
obj[0] = new Obj("I","V","X");
obj[1] = new Obj("X","L","C");
obj[2] = new Obj("C","D","M");
obj[3] = {"1": "M","2":"MM","3":"MMM"};

function int_rom(num){
  let str = String(num);
  let return_str = "";
  for(let i=0; i<str.length; i++){
    let obj_position = obj[i];
    return_str = obj_position[str[str.length - 1 -i]] + return_str;
  }
  return return_str;

}

console.log(int_rom(1234));