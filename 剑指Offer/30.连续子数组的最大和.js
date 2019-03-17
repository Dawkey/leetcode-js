//题目：
//求一个数组里面和最大的子数组，返回这个最大的和的值。
//子数组指的是数组中连续的数，数组中的数可以是负数。

//典型的动态规划问题。

//动态规划，就是把大的问题化为小问题，
//小问题再一层层的递增上去解决大问题。
//具体代码实现就是从最小的问题出发，一层层的遍历到大问题。

//具体到这题就是，设置两个变量，
//一个用来保存前面n-1个数中最大的包含第n-1个数的连续数相加的和。
//一个用来保存前面n-1个数中最大的连续数相加的和。
//每次遍历就更新这两个变量，直到最后。

function max_child(arr){
    if(!arr.length){
        return;
    }

    let pre_sum = arr[0];
    let pre_max = arr[0];
    for(let i=1; i<arr.length; i++){
        pre_sum = Math.max(pre_sum+arr[i] , arr[i]);
        pre_max = Math.max(pre_sum , pre_max);
    }

    return pre_max;
}

console.log(max_child([-2,-8,-1,-5,-9]));