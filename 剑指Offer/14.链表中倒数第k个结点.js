//题目：
//输入一个链表，输出该链表中倒数第k个结点。
//如果，k超过链表长度，返回空。

//用快慢指针，快指针先走k步，慢指针再走，编写时要注意一下边界问题。
//对于链表，最后一个节点是next为null的节点。

function find_k(head,k){
    let qui_index = head;
    let slo_index = head;

    let flag = 0;
    while(qui_index !== null){
        if(flag < k){
            flag = flag + 1;
            qui_index = qui_index.next;
        }else{
            qui_index = qui_index.next;
            slo_index = slo_index.next;
        }
    }

    if(flag < k){
        return null;
    }

    return slo_index;
}