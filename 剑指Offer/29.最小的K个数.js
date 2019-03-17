//题目：
//输入 n 个整数，找出其中最小的K个数。
//例如输入 4,5,1,6,2,7,3,8 这8个数字，则最小的4个数字是1,2,3,4。

function find_k(arr,k){
    for(let i=0; i<arr.length; i++){
        if(i > k-1){
            break;
        }
        for(let j=arr.length-1; j>i; j--){
            if(arr[j] < arr[j-1]){
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
    }

    if(k > arr.length){
        return [];
    }
    return arr.slice(0,k);
}

console.log(find_k([4,5,1,6,2,7,3,8],8));
