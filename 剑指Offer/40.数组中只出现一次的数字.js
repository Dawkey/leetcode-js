//题目：数组中只出现一次的数字。
//一个整型数组里除了两个数字之外，其他的数字都出现了两次。
//请写程序找出这两个只出现一次的数字。

//如果不在乎空间可以用哈希去做。
//用`js`原生的indexOf和lastIndexOf也可以很简单的做出来。

//下面是使用一种有趣的异或去做的，如果相同的数做异或，结果会得0。
//我们开始对数组中所有有数都做异或，有上面提到的，最终结果等价于
//两个只出现了一次的数做异或，我们取出最终结果二进制中第一个不为0的位置。
//去判断数组中所有的数，二进制在该位置上是否为0，以此为标准，分为两个数组。
//这样两个只出现了一次的数就被分别分到了两个数组中。且相同的数也一定在同一个数组中。
//最后对两个数组再分别做一次异或，得到两个只出现一次的数。


function find_once(arr){
    let merge = arr.reduce((pre,cur)=>{return pre^cur});

    let index = find_index(merge);

    let arr_1=[],arr_2=[];

    for(let i=0; i<arr.length; i++){
        if(is_index(arr[i],index)){
            arr_1.push(arr[i]);
        }else{
            arr_2.push(arr[i]);
        }
    }

    let num_1 = arr_1.reduce((pre,cur)=>{return pre^cur});
    let num_2 = arr_2.reduce((pre,cur)=>{return pre^cur});

    return [num_1,num_2];
}

function find_index(num){
    let index = 0;

    while(true){
        let temp = num>>index;
        if(temp === 0){
            break;
        }
        if(temp & 1 === 1){
            break;
        }
        index++;
    }

    return index;
}

function is_index(num,index){
    if(num>>index & 1 === 1){
        return true;
    }else{
        return false;
    }
}

console.log(find_once([1,2,3,3,4,4]));