//题目：
//输入一个字符串,按字典序打印出该字符串中字符的所有排列。
//例如输入字符串abc,
//则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。

//操蛋的一题，写的感觉没有问题，但是牛客网死活 AC 不过，先放着吧。

//通过递归来实现。

let ret_arr = [];

function print(str,index){
    
    index++;
    if(index === str.length - 1){
        ret_arr.push(str);
        return;
    }

    print(str,index);
    let flag = {};
    flag[str[index]] = 1;
    for(let i=index + 1; i<str.length; i++){
        if(flag[str[i]]){
            continue;
        }
        flag[str[i]] = 1;
        let new_str = str_swap(str,index,i);
        print(new_str,index);
    }
    
}

function str_swap(str,i,j){

    let arr = str.split("");
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    if(j - i >= 2){
        let temp = arr[i+1];
        arr[i+1] = arr[j];
        arr[j] = temp;
    }
    return arr.join("");
}