//题目：
//输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
//路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
//(注意: 在返回值的list中，数组长度大的数组靠前)


//本来是挺简单的题，题目每看仔细，导致花了好久。
//还是用递归，不过值得注意的是，在存路径时，要对数组进行一次深拷贝。

function find_value(root,num,arr,ret_arr){

    if(root === null){
        return;
    }

    let next_num = num - root.val;

    arr.push(root.val);
    if(next_num === 0 && root.left === null && root.right === null){
        ret_arr.push(JSON.parse(JSON.stringify(arr)));
    }
    find_value(root.left,next_num,arr,ret_arr);
    find_value(root.right,next_num,arr,ret_arr);

    arr.pop();
}


function find_path(root,num){
    let arr = [];
    let ret_arr = [];

    find_value(root,num,arr,ret_arr);

    ret_arr.sort((a,b)=>{
        return b.length - a.length;
    });

    return ret_arr;
}

