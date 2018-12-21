### 19.删除链表的倒数第N个节点（Remove Nth Node From End of List）

**思路：**

第一种方法：首先遍历出链表的长度，接着根据长度，再次遍历链表，找出倒数第n个节点，将其删除，值得注意的是，我们使用`node.next = node.next.next`来删除节点，因而最终我们找到的`node`应该为删除节点的前一个节点。

第二种方法：设置两个指针都指向链表的头节点，首先让第一个指针在链表上后移`n+1`次，之后，让两个指针同时开始后移，在第一个指针指向`null`后，停止移动，此时，第二个指针是指向倒数第`n+1`个节点，接着执行`node.next = node.next.next`删除倒数第`n`个节点。

**代码：**

```js
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
```

----

### 20.有效的括号（Valid Parentheses）

**思路：**

简单的堆栈出栈，在遇到左括号时，堆栈；在遇到右括号时，出栈，并判断出栈的元素是否该右括号匹配，不匹配直接返回`false`，在字符串中的所有元素全部遍历完后，判断栈中是否还有元素，如果没有，返回`true`，否则，返回`false`。

值得注意的是我们如何优雅的判断左、右小括号|中括号|大括号，通过给对象添加属性的形式，可以让我们少写不少`if`，具体方法见如下面代码。

**代码：**

```js
//事实上有更优雅的方法，把对象设为：
//{'(' : ')'  , '[' : ']' , '{' : '}'}
//的形式。

function is_valid(str){
    let obj = {
        "(": 1,
        "[": 2,
        "{": 3,
        ")": -1,
        "]": -2,
        "}": -3
    };
    let arr = str.split("");
    let stack_arr = [];
    for(let i=0; i<arr.length; i++){
        let value = obj[arr[i]];
        if(value > 0){
            stack_arr.push(value);
        }else{
            let pop_value = stack_arr.pop();
            if(pop_value !== -value){
                return false;
            }
        }
    }

    if(stack_arr.length === 0){
        return true;
    }else{
        return false;
    }
}

console.log(is_valid("(([]))"));
```

----

### 21.合并两个有序链表（Merge Two Sorted Lists）

**思路：**

非常简单的一道题，更多的是考察对于链表的操作。

首先创建一个空的链表指针，接着比较两个有序链表节点的值，用更小的值创建一个新节点，并用空的链表指针指向这个新节点，同时，把更小值的有序链表的节点往后移一位。

如此重复，直到有一个有序链表指向`null`，这时，把另一个有序链表的剩余部分接在我们创建的新链表上。

值得注意的是，在实际操作时，我们需要不停的为我们的新链表添加元素，而最终返回的需要是链表的头节点，故开始我们要创建两个指针。

**代码：**

```js
function ListNode(val){
    this.val = val;
    this.next = null;
}

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
```

----

### 22.括号生成（Generate Parentheses）

**思路：**

不是太容易的一道题，最终采用官方题解上的回溯法。

如果让我们在草稿纸上计算`n=3`的情形，怎么有条理的罗列出所有情形？

如下

```js
( ( ( ) ) )
( ( ) ( ) )
( ( ) ) ( )
( ) ( ( ) )
( ) ( ) ( )
```

我们采用**优先左括号**的原则，有左括号就添加，没有就就添右括号，填满之后就往回回溯，修改之前的左括号为右括号，接着执行**优先左括号**原则，填满之后，再往回回溯，一直到回溯到结束，语言不好描述，具体见代码。

**代码：**

```js
function pare_make(n){
    let ret_arr = [];

    function recursion(str, left, right){
        if(str.length === 2 * n){
            ret_arr.push(str);
            return;
        }

        if(left < n){
            recursion(str + "(", left+1, right);
        }

        if(left > right){
            recursion(str + ")", left, right+1);
        }
    }

    recursion("",0,0);

    return ret_arr;
}

console.log(pare_make(4));
```

----

### 23.合并K个排序链表（Merge k Sorted Lists）

**思路：**

花费时间颇长，最终还是采用了分解为两个链表合并的问题。

在**21.合并两个有序链表**中已经提到了两个链表的解法，这里直接使用之前的函数就行了。

值得注意的是我们在合并时，可以采用两种方法：

* 先把已经给的链表两两合并，接着对新生成的链表再两两合并，这样重复，一直到合并为一条链表；
* 始终把已合并的新的链表和后面的链表进行合并，这样重复k-1次，最终合并出一条链表。

效率上前者更快，具体原因没有深究，代码采用的是前者。

**代码：**

```js
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
```

----

### 24.两两交换链表中的节点（Swap Nodes in Pairs）

**思路：**

这题做出来还是挺兴奋的(p≧w≦q)！

具体思路见下图：
![](24.两两交换链表中的节点.jpg)

关键点就在于为`use_node`变量应根据`node`变量的不同，其`next`的指向也会不同：

* 第一种`node === null`；
* 第二种`node.next === null`；
* 第三种`node.next !== null`。

分三种情形执行不同的操作，具体见如下代码：

**代码：**

```js
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
```

----

### 25.删除排序数组中的排序项（Remove Duplicates from Sorted Array）

**思路：**

最初是用`split`做的，效率很低。

题目不允许在用新的数组，同时，不用考虑超出新数组长度的部分。

故我们可以设置一个`index`变量为`k`，最初值为`0`，我们对数组开始遍历，在数组前一个数与当前数相等时，不改变`k`的值，否则，对`k`加`1`，把数组的第`k`项赋为当前数的值，这样重复到数组遍历完，最终去重数组的长度就是`k+1`,同时数组的`0`到`k`项就是去重数组项。

**代码：**

```js
function remove_same(nums){
    let k = 0;

    for(let i=1; i<nums.length; i++){
        if(nums[i] !== nums[i-1]){
            k++;
            nums[k] = nums[i];
        }
    }

    return k + 1;
}
```

----

### OF1.查找重复的元素

> 剑指Offer上比较有趣的一题。

> 题目描述：在一个长度为n的数组里的所有数字都在0到n-1的范围内。数组中的某些数字是重复的，但不知道有几个数字重复，  也不知道每个数字重复几次。找出数字中任意一个重复数字。

> 例子：输入---[2, 3, 1, 0, 2, 5, 3]，输出---2（第一个重复的数字）

**思路：**

这题的出题意图是比较明显的，引导我们朝数组索引的方向去想。

方法一：  
比较直接的方法是创建长度为n的数组，记为数组B，每一项的值为0，对原数组进行遍历，原数组中的值作为数组B的索引，每遍历一个值，把数组B对于项的值加1，如果该项值已经不为0，直接跳出，返回遍历的值。

方法二：  
第一种需要额外的新数组，我们可以对其优化，同样是利用索引，不过是在原数组上进行。

对原数组开始遍历，比较遍历项的值和索引，如果值和索引相同，接着往后遍历；

否者，考察该项与数组中以该项值为索引的项是否相等，相等，说明已找到重复项，返回；不相等，对这两项进行交换。

在交换后，接着考察交换后该项的值和索引是否相同，不同接着重复上面操作，直到相同才接着往后遍历，直到遍历结束。

**代码：**

```js
function get_same(arr){
    let i =0;

    while(i < arr.length){

        let k = arr[i];    
        if(k !== i){
            if(arr[i] === arr[k]){
                return k;
            }

            arr[i] = arr[k];
            arr[k] = k;
        }
        else{
            i++;
        }

    }

    //如果没找到重复项，返回null
    return null;
}
```

---

### 27.移除元素（ Remove Element）

**思路：**

完全类似于**25.删除排序数组中的排序项**的一道题，不做赘述。

**代码：**

```js
function remove_val(nums,val){
    let k = -1;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){
            k++;
            nums[k] = nums[i];
        }
    }
    return k+1;
}
```