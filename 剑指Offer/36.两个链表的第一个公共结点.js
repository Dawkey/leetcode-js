//题目：
//输入两个链表，找出它们的第一个公共结点。

//用哈希结构直接偷懒。
//另外一种不牺牲空间的做法，先计算两个链表的长度，得到
//长度差，之后让长的链表先走长度差位，短链表再走，此时，
//每次比较两边的节点。

function find_common(root_1, root_2){
    let map = new Map();

    let node_1 = root_1;
    while(node_1 !== null){
        map.set(node_1,1);
        node_1 = node_1.next;
    }

    let ret_node = null;
    let node_2 = root_2;
    while(node_2 !== null){
        if(map.has(node_2)){
            ret_node = node_2;
            break;
        }
        node_2 = node_2.next;
    }

    return ret_node;
}