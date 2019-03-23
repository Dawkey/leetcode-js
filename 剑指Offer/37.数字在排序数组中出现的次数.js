//题目：
//统计一个数字在升序数组中出现的次数。

//简单的二分查找，找到后，再左右两边进行查找就完事了。

function get_count(arr,num){
    let index_l = 0;
    let index_r = arr.length - 1;
    let index = null;
    while(index_r >= index_l){
        let index_m = index_l + Math.floor((index_r - index_l) / 2);
        if(num === arr[index_m]){
            index = index_m;
            break;
        }
        if(num < arr[index_m]){
            index_r = index_m - 1;
        }else{
            index_l = index_m + 1;
        }
    }
    
    if(index === null){
        return 0;
    }

    let count = 1;
    let temp = index - 1;
    while(arr[temp] === num){
        count++;
        temp--;
    }

    temp = index + 1;
    while(arr[temp] === num){
        count++;
        temp++;
    }

    return count;
}

console.log(get_count([1,2,3,4,4,4,5,6],4));
