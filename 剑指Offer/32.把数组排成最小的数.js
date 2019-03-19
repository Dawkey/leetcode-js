//题目：
//把数组排成最小的数。

//思路上很简单又巧妙。

//改变一般的排序规则，我们设有a，b两个数，把这两个数转为字符串，再
//进行字符串间的相加，如果a + b > b + a，就交换两者位置，否则，不交换。
//最后写一个排序函数，把它传给 sort 就行了。

function min_fix(arr){
    arr.sort(sort_rule);
    return arr.join("");
}

function sort_rule(a,b){
    let str_a = String(a);
    let str_b = String(b);

    if(str_a + str_b < str_b + str_a){
        return -1;
    }else{
        return 1;
    }
}

console.log(min_fix([11,2,21,1,123]));