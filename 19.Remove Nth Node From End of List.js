function remove_list(head,n){
    let node = head;
    let length = 0;
    while(node){
        node = node.next;
        length++;
    }

    if(length === n){
        return head.next;
    }

    node = head;
    for(let i=0; i<length - n -1; i++){
        node = node.next;
    }
    node.next = node.next.next;

    return head;
}

function remove_list_b(head,n){
    let node_1 = head;
    let node_2 = head;

    for(let i=0; i<n+1; i++){
        if(node_1 === null){
            return head.next;
        }
        node_1 = node_1.next;
    }

    while(node_1){
        node_1 = node_1.next;
        node_2 = node_2.next;
    }

    node_2.next = node_2.next.next;

    return head;
}

let node_4 = {val: "4",next: null};
let node_3 = {val: "3",next: node_4};
let node_2 = {val: "2",next: node_3};
let node_1 = {val: "1",next: node_2};
let node_0 = {val: "0",next: node_1};

console.log(remove_list_b(node_0,5));