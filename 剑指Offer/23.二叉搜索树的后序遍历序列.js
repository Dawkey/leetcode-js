//题目：
//输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
//如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

//由于二叉搜索树的特性，我们从给的数组末尾开始找，第一个是根，之后找到的
//第一个比根小的数就是分界点，从分界点到结尾就是右子树的序列，从分界点继续
//往前遍历，如果有比根大的数，说明这不是二叉搜索树的后序遍历，否则，开头
//到分界点就是左子树的内容。
//如此，一遍下来，接着判断左子树和右子树，递归下去。

function last_bool(arr){
    if(arr.length <= 1){
        return true;
    }

    let root = arr[arr.length - 1];
    let index = -1;
    for(let i=arr.length - 2; i>-1; i--){
        if(arr[i] < root){
            index = i;
            break;
        }
    }

    let left = arr.slice(0,index + 1);

    for(let i = 0; i<left.length; i++){
        if(left[i] > root){
            return false;
        }
    }


    let right = arr.slice(index + 1,arr.length - 2);
    return last_bool(left) && last_bool(right);
}

console.log(last_bool([6,5,11,14,13,10]));