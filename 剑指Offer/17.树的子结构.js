//题目：
//输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

//比较麻烦的一题。
//刚开始以为是判断子树，结果发现是判断子结构，又稍微调整了一下。
//使用递归，用is_tree始终判断一颗树在同节点是不是另一颗树的子结构，用has_tree判断一颗树是不是另一颗的子结构。


// function TreeNode(){
//     this.val = x;
//     this.left = null;
//     this.right = null;
// }

function has_tree(root_1,root_2){

    if(root_1 === null || root_2 === null){
        return false;
    }

    if(is_tree(root_1,root_2)){
        return true;
    }

    if(has_tree(root_1.left,root_2) || has_tree(root_1.right,root_2)){
        return true;
    }

    return false;

}


function is_tree(root_1,root_2){
    
    if(root_2 === null){
        return true;
    }

    if(root_1 === null){
        return false;
    }

    if(root_1.val !== root_2.val){
        return false;
    }

    return is_tree(root_1.left,root_2.left) && is_tree(root_1.right,root_2.right);

}