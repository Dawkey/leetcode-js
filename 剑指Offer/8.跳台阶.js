//题目：
//一只青蛙一次可以跳上1级台阶，也可以跳上2级。
//求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

//好吧，这就是一个初始值为1,2的斐波拉数列的题。
//n个台阶的种数就是 n-1 个台阶和 n-2 个台阶总数的和。

function Jump(n){
    if(n === 1){
        return 1;
    }else if(n === 2){
        return 2;
    }

    let one = 1;
    let two = 2;
    let temp;

    for(let i=3; i<=n; i++){
        temp = one + two;
        one = two;
        two = temp;
    }

    return two;
}

console.log(Jump(4));