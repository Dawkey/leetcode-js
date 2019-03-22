//题目：
//在一个字符串(0<=字符串长度<=10000，全部由字母组成)中
//找到第一个只出现一次的字符，并返回它的位置，
//如果没有则返回 -1（需要区分大小写）。

//用哈希结构去求解。

function find_first(str){
    let map = new Map();

    for(let i=0; i<str.length; i++){
        if(!map.has(str[i])){
            map.set(str[i],[i,1]);
        }else{
            map.get(str[i])[1] += 1;
        }
    }

    let ret_index = -1;
    
    for(let val of map.values()){
        if(val[1] === 1){
            ret_index = val[0];
            break;
        }
    }

    return ret_index;
}

console.log(find_first("111"));