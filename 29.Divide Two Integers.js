function divide(dived_num, div_num){
    let flag = 1;
    if(dived_num < 0){
        dived_num = -dived_num;
        flag = -flag;
    }
    if(div_num < 0){
        div_num = -div_num;
        flag = -flag;
    }
    
    let remain_num = dived_num;
    let quo_num = 0;
    while(remain_num >= div_num + div_num){
        let quo = 1;
        let add = div_num;
        while(add + add <= remain_num){
            add = add + add;
            quo = quo + quo;
        }
        remain_num = remain_num - add;
        quo_num = quo_num + quo;
    }

    
    if(remain_num >= div_num){
        quo_num = quo_num + 1;
    }
    if(flag === -1){
        quo_num = -quo_num;
    }

    if(quo_num >= 2147483647 || quo_num <= -2147483648){
        return 2147483647;
    }

    return quo_num;
}


console.log(divide(100,13));