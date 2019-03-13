//题目：
//输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
//例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16，
//则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

//思路上不难理解，但是扣边界问题比较蛋疼的一题，就是一圈一圈的打印矩阵。
//小技巧是在打印前两边时，把它们打印的偏多（占住矩形的顶点），这样，对于特殊情况的处理会比较简单。

function print(arr){
    let ret_arr = [];
    let length_1 = arr[0].length;
    let length_2 = arr.length;
    
    let round = 0;
    let round_num = Math.min(Math.ceil(length_1/2),Math.ceil(length_2/2));
    while(round < round_num){
        let flag = round * 2 + 1;

        for(let i = round; i < length_1-round-1; i++){
            ret_arr.push(arr[round][i]);
        }
        
        for(let i = round; i < length_2 -round; i++){
            ret_arr.push(arr[i][length_1 - 1 - round]);
        }

        if(length_1 === flag || length_2 === flag){
            break;
        }

        for(let i = length_1-2-round; i>round; i--){
            ret_arr.push(arr[length_2 - 1 - round][i]);
        }


        for(let i = length_2-1-round; i>round; i--){
            ret_arr.push(arr[i][round]);
        }

        round++;
    }

    return ret_arr.join(",");
}

console.log(print([[1,2,3],[4,5,6]]));