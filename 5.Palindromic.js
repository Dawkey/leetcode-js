function palin(str){
  let insert_str = str.split("").join("#");
  insert_str = `^#${insert_str}#$`;
  let arr = insert_str.split("");
  let p = [0];
  let c = 0;
  let r = 1;
  for(let i=1; i<arr.length-1; i++){
    let i_mirror = (r > i) ? 2*c - i : i;
    p[i] = (r > i) ? Math.min(p[i_mirror],r - i) : 0;

    while(arr[i - p[i] - 1] === arr[i + p[i] + 1]){
      p[i]++;
    }

    if(p[i] > p[i_mirror]){
      c = i;
      r = i + p[i];
    }
  }
  p.shift();

  let index = 0;
  let max_length = 0;
  for(let i=0; i<p.length; i++){
    if(p[i] > max_length){
      max_length = p[i];
      index = i;
    }
  }
  let first_index = (index - max_length + 1 - 1)/2;

  return str.substr(first_index,max_length);
}

console.log(palin("dawkeyyekwad"));