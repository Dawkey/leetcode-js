//题目：
//输入一个链表，反转链表后，输出新链表的表头。
//简单的链表节点互换，把链表遍历一遍就行了。

function reverse(head){

    let node = head;
    let before_node = null;
    let next_node = null;

    while(node !== null){
        next_node = node.next;
        node.next = before_node;

        if(next_node === null){
            break;
        }
        before_node = node;
        node = next_node;
    }

    return node;
    
}