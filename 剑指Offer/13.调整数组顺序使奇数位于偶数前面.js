//题目：
//输入一个整数数组，实现一个函数来调整该数组中数字的顺序。
//使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
//并保证奇数和奇数，偶数和偶数之间的相对位置不变。

//可以用快排的思想去做，但是不能保证最终相对位置是有序的。
//最终使用空间来换时间，额外使用数组，时间复杂度为O(n)。

function adjust(array){
    let arr_1 = [];
    let arr_2 = [];

    for(let val of array){
        if(val % 2 === 1){
            arr_1.push(val);
        }else{
            arr_2.push(val);
        }
    }

    let ret_arr = [...arr_1,...arr_2];

    for(let i=0; i<array.length; i++){
        array[i] = ret_arr[i];
    }

    return ret_arr;
}

let test = [1,2,3,4,5,6,7,8,9,10];
console.log(adjust(test));
console.log(test);