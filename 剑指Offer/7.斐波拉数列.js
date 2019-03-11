//递归时间复杂度会特别大，最后只能顺着斐波拉数列的思路来写。

function Fibo(n){
    if(n === 0){
        return 0;
    }else if(n === 1){
        return 1;
    }

    one = 0;
    two = 1;

    for(let i=2; i<=n; i++){
        temp = one + two;
        one = two;
        two = temp;
    }

    return two;
}

console.log(Fibo(4));
