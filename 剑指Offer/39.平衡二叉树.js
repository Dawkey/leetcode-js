//题目：
//输入一棵二叉树，判断该二叉树是否是平衡二叉树。

//递归的去求树的高度，每次去计算左子树和右子树的高度，如果高度差大于1
//则返回-1，表示这颗树不再是平衡二叉树。

function balance(root){
    if(root === null){
        return 0;
    }

    let left = root.left;
    let right = root.right;

    let left_h = balance(left);
    if(left_h === -1) return -1;

    let right_h = balance(right);
    if(right_h === -1) return -1;

    if(Math.abs(left_h - right_h) > 1){
        return -1;
    }else{
        return Math.max(left_h,right_h) + 1;
    }
}

function is_balance(root){
    return balance(root) === -1 ? false : true;
}