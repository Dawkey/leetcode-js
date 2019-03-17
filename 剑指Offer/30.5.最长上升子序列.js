//题目：
//给定长度为n的序列，从序列中抽取出一个子序列，
//这个子序列需要单调递增。问最长的上升子序列的长度。

//同样是动态规划问题。
//思路就是，每次找包含数组中最后一个数的最长上升子序列。
//这个最长上升子序列的长度计算方式，
//就是前面所有小于最后这个数的最长上升子序列的最大长度加一。
//最后，在求出这些求出最长上升子序列长度的最大值。

function find_top(arr){
    let len_arr = [];
    let ret_length = 0;

    for(let i=0; i<arr.length; i++){
        let val = arr[i];
        let max_length = 0;
        for(let j=0; j<len_arr.length; j++){
            if(arr[j] < val && max_length < len_arr[j]){
                max_length = len_arr[j];
            }
        }
        max_length++;
        len_arr.push(max_length);
        if(ret_length < max_length){
            ret_length = max_length;
        }
    }

    return ret_length;
}