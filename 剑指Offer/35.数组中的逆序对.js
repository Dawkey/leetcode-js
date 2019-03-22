//题目：
//在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
//输入一个数组，求出这个数组中的逆序对的总数P。
//并将P对1000000007取模的结果输出。 即输出P%1000000007。

//颇为复杂的一题，思路上基于归并排序，在合并的过程中，每次挪动左边数组
//指针的过程中，对逆序对的总数P加上右边数组指针所在的位置下标。

//值得注意的是，普通的归并排序，我们在左右两边数组任意一个指针到头就会
//停止，但是，对于求逆序对的总数P，我们不管怎样都需要遍历完左边数组。

function sort(arr,count){
    if(arr.length <= 1){
        return arr;
    }

    let d_index = Math.floor(arr.length / 2);
    let arr_1 = arr.slice(0,d_index);
    let arr_2 = arr.slice(d_index);

    arr_1 = sort(arr_1,count);
    arr_2 = sort(arr_2,count);
    return merge(arr_1,arr_2,count);
}

function merge(arr_1,arr_2,count){
    let arr = [];
    let i = 0;
    let j = 0;
    while(i < arr_1.length){
        if(j === arr_2.length || arr_1[i] < arr_2[j]){
            arr.push(arr_1[i]);
            i++;
            count.val = count.val + j;
        }else{
            arr.push(arr_2[j]);
            j++;
        }
    }

    if(i === arr_1.length){
        arr = arr.concat(arr_2.slice(j));
    }else{
        arr = arr.concat(arr_1.slice(i));
    }

    return arr;
}

function find_count(arr){
    let count = {val: 0};
    sort(arr,count);
    return count.val % 1000000007;
}

console.log(find_count([1,2,3,4,5,6,7,0]));
