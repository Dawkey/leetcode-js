//题目：
//输入一个复杂链表
//（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点）。
//返回结果为复制后复杂链表的head。
//（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）

//使用ES6的map结构，把对象作为属性，空对象作为属性值，构成一个初始的的map（哈希）结构
//接着对链表再遍历一遍，对空对象进行重新的指针指引就行了。

//哈希做法

function copy(head){

    let map = new Map();
    let node = head;

    map.set(null,null);
    while(node){
        map.set(node,{label: node.label});
        node = node.next;
    }

    let ret_head = map.get(head);
    let ret_node = ret_head;
    node = head;
    while(ret_node){
        
        ret_node.next = map.get(node.next);
        ret_node.random = map.get(node.random);

        ret_node = ret_node.next;
        node = node.next;
    }

    return ret_head;

}
