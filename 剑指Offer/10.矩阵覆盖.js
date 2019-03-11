//题目：
//我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
//请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

//依然是斐波拉数列，我们考察2 * n的种数，就相当于是2 * n-1的种数和
//2 * n-2的种数和。

function cover(n){

    if(n <= 2){
        return n;
    }

    one = 1;
    two = 2;

    for(let i=3; i<=n; i++){
        temp = one + two;
        one = two;
        two = temp;
    }

    return two;

}

console.log(cover(5));