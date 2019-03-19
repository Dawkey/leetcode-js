//题目：
//把只包含质因子2、3和5的数称作丑数（Ugly Number）。
//例如 6、8 都是丑数，但 14 不是，因为它包含质因子7。
//习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。

//思路上也是十分的巧妙。
//准备三个数组，准备一个变量，初始值为1，表示当前的最小数，用最小变量分别
//乘以 2、3、5，结果分别放入三个数组中，比较三个数组第一位的数的大小，
//取出最小的数，把它赋给最小变量，同时，把这个数从数组中一次，
//如果有两到三个数组第一位有相同的最小数，把它们都一次。
//重复以上操作。

function ugly(index){

    let two_arr = [];
    let three_arr = [];
    let five_arr = [];
    let min_val = 1;

    while(index > 1){
        two_arr.push(min_val * 2);
        three_arr.push(min_val * 3);
        five_arr.push(min_val * 5);

        min_val = Math.min(two_arr[0],three_arr[0],five_arr[0]);

        if(two_arr[0] === min_val) {two_arr.shift();}
        if(three_arr[0] === min_val) {three_arr.shift();}
        if(five_arr[0] === min_val) {five_arr.shift();}

        index--;
    }
    
    return min_val;
}

console.log(ugly(9));