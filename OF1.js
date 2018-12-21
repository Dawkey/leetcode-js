/*
    剑指Offer一题

    题目描述：在一个长度为n的数组里的所有数字都在0到n-1的范围内。数组中的某些数字是重复的，但不知道有几个数字重复，
    也不知道每个数字重复几次。找出数字中任意一个重复数字。

    例子：输入---[2, 3, 1, 0, 2, 5, 3]，输出---2（第一个重复的数字）
*/

function get_same(arr){
    let i =0;

    while(i < arr.length){

        let k = arr[i];    
        if(k !== i){
            if(arr[i] === arr[k]){
                return k;
            }

            arr[i] = arr[k];
            arr[k] = k;
        }
        else{
            i++;
        }

    }

    //如果没找到重复项，返回null
    return null;
}

console.log(get_same( [2, 3, 1, 0, 2, 5, 3] ));