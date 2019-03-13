//题目：
//定义栈的数据结构。
//请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。

//思路上了解之后就很好做的一题，准备两个栈，栈A用来存数据，栈B用来存最小值。
//每次压数时，和栈B的栈顶比较，如果压入的数更小，把这个数压入栈B，否则，把栈B栈顶的数再压一遍。

let stack_1 = [];
let stack_2 = [];

function push(val){
    stack_1.push(val);
    if(stack_2.length === 0 || min() > val){
        stack_2.push(val);
    }else{
        stack_2.push(min());
    }
}

function pop(){
    stack_1.pop();
    stack_2.pop();
}

function top(){
    return stack_1[stack_1.length - 1];
}

function min(){
    return stack_2[stack_2.length - 1];
}