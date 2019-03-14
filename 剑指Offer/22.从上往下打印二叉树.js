//题目：
//从上往下打印出二叉树的每个节点，同层节点从左至右打印。

//就是二叉树的广度优先搜索
//本来想要用递归来做，不过递归的返回数组比较难管理
//最终还是使用队列来实现。

function print_tree(root){
    if(root === null){
        return [];
    }

    let arr_1 = [root];
    let arr_2 = [];

    while(arr_1.length){
        node = arr_1.shift();
        arr_2.push(node.val);
        if(node.left){
            arr_1.push(node.left);
        }
        if(node.right){
            arr_1.push(node.right);
        }
    }

    return arr_2;
}
