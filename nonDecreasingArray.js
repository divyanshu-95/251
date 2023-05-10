let count=0;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            count++;
            if(count>1){
                return false;
            }
            if(arr[i-1]>arr[i+1]){
                console.log('-1',i)
                arr[i+1]=arr[i]
            }else{
                arr[i]=arr[i+1]
            }
        }
    }
    return true;
