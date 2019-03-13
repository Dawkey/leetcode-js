//题目：
//操作给定的二叉树，将其变换为源二叉树的镜像。

//十分简单的一个递归就能搞定。

function change_tree(root){

    if(root === null){
        return;
    }

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    change_tree(root.left);
    change_tree(root.right);

}