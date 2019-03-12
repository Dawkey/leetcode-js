//题目：
//输入两个单调递增的链表，输出两个链表合成后的链表。
//合成后的链表满足单调不减规则。

//加了一点条件判断，代码写的有点冗长，思路很简单，就是用外排的思想。

//之后发现可以用递归的实现来做，每次选择一个节点，让这个节点后面的
//节点再去和另一条链调用merge函数去merge，这样代码上会简单的多。

function merge(head_1,head_2){

    if(head_1 === null){
        return head_2;
    }

    if(head_2 === null){
        return head_1;
    }

    let node_1 = head_1;
    let node_2 = head_2;

    let ret_head = null;
    let node = null;

    if(node_1.val < node_2.val){
        ret_head = node = node_1;
        node_1 = node_1.next;
    }else{
        ret_head = node = node_2;
        node_2 = node_2.next;
    }

    while(node_1 && node_2){
        if(node_1.val < node_2.val){
            node.next = node_1;
            node = node_1;
            node_1 = node_1.next;
        }else{
            node.next = node_2;
            node = node_2;
            node_2 = node_2.next;
        }
    }

    if(node_1 === null){
        node.next = node_2;
    }else{
        node.next = node_1;
    }

    return ret_head;
}
