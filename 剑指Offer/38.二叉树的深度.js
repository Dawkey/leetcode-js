//题目：
//输入一棵二叉树，求该树的深度。
//从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。

//写的很丑的递归，本质上就是对树的深度优先遍历，如果使用栈，也可以对树进行一层层的广度遍历，求出深度。

let ret_length;

function tree_length(root,length){

    if(root === null){
        if(ret_length < length){
            ret_length = length;
        }
        return;
    }

    let left = root.left;
    let right = root.right;

    length++;
    tree_length(left,length);
    tree_length(right,length);

}

function main(root){
    ret_length = 0;
    tree_length(root,0);
    return ret_length;
}