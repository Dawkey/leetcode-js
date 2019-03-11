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