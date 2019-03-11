function swap_node(head){
    if(head || head.next){
        return head;
    }

    let node = head;
    head = head.next;
    
    while(node || node.next){
        let use_node = node;
        node = use_node.next.next;
        use_node.next.next = use_node;
        
        if(node === null){
            use_node.next = node;
        }
        else if(node.next === null){
            use_node.next = node;
        }
        else if(node.next !== null){
            use_node.next = node.next;
        }
    }

    return head;
}