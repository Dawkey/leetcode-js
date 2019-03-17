//题目：
//数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
//例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
//由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。

//用哈希结构（map）去存数字出现的次数，具体不作阐述。

function find_half(arr){
    if(arr.length === 1){
        return arr[0];
    }

    let length = Math.floor(arr.length / 2);
    let ret_num = 0;
    let map = new Map();
    for(let val of arr){
        if(!map.has(val)){
            map.set(val,1);
        }else{
            let count = map.get(val) + 1;
            map.set(val,count);
            if(count > length){
                ret_num = val;
                break;
            }
        }
    }

    return ret_num;
}

console.log(find_half([1,1,1]));