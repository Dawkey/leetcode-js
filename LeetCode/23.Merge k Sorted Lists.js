function merge_list(l1,l2){
    let head = new ListNode(0);
    let node = head;

    while(l1 && l2){
        if(l1.val < l2.val){
            node.next = new ListNode(l1.val);
            l1 = l1.next;
        }else{
            node.next = new ListNode(l2.val);
            l2 = l2.next;
        }

        node = node.next;
    }

    node.next = l1 || l2;

    return head.next;
}

function merge_lists(lists){
    while(lists.length !== 1){
        let l1 = lists.shift();
        let l2 = lists.shift();
        lists.push(merge_list(l1, l2));
    }

    return lists[0];
}