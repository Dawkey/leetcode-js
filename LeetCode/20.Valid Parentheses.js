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

console.log(is_valid("(([{]))"));