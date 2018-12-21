function str_str(str1, str2){
    if(str2 === ""){
        return 0;
    }
    if(str1 === ""){
        return -1;
    }

    let arr1 = str1.split("");
    let arr2 = str2.split("");
    for(let i = 0; i<=arr1.length; i++){
        if(arr1.length - i < arr2.length){
            return -1;
        }

        let k = i;
        for(let j=0; j<arr2.length; j++){
            if(arr1[k] === arr2[j]){
                if(j === arr2.length - 1){
                    return i;
                }
                k++;
            }else{
                break;
            }
        }
    }
}

console.log(str_str("dawkey","key"));