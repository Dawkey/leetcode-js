//题目：
//输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
//要求不能创建任何新的结点，只能调整树中结点指针的指向

//花了好长时间写的一题，主要是对于中序遍历的具体过程不太了解。
//具体思路就是，对树进行中序遍历，始终用一个变量来存上一个节点。
//让上一个节点的 right 指向当前节点，让当前节点的 left 指向上一个节点。

//对于二叉树中序遍历非递归的写法。
function middle_sort(root){

    let node = root;
    let arr = [];
    let ret_arr = [];
    while(node || arr.length){
        if(node !== null){
            arr.push(node);
            node = node.left;
        }else{
            node = arr.pop();
            ret_arr.push(node.val);
            node = node.right;
        }
    }

    return ret_arr;

}


//基于中序遍历非递归，以上题目的解法。
function convert_1(root){

    let node = root;
    let arr = [];
    let pre = null;
    let head = null;

    while(node || arr.length){
        if(node !== null){
            arr.push(node);
            node = node.left;
        }else{
            node = arr.pop();
            if(!head){
                head = node;
            }
            if(pre !== null){
                pre.right = node;
            }
            node.left = pre;
            pre = node;

            node = node.right;
        }
    }

    return head;

}


//基于中序遍历递归，以上的解法。
function convert_2(root){
    let pre = null;
    let flag = true;
    let head = null;

    function transform(root){
        if(!root){
            return;
        }

        transform(root.left);
        if(flag){
            head = root;
            flag = false;
        }

        if(pre !== null){
            pre.right = root;
        }
        root.left = pre;
        pre = root;

        transform(root.right);

    }
    
    transform(root);
    
    return head;
}


let root = {left:{
    left:{left:null,right:null,val:10},
    right:{left:null,right:null,val:35},
    val:30
},right:{
    left:{left:null,right:null,val:45},
    right:{left:null,right:null,val:60},
    val:50
},val:40};

