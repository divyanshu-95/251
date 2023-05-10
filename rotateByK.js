var rotate = function(arr, k) {
    for (let i = 0; i < k; i++){
        let f = arr[0];
            for (let j = 0; j < arr.length - 1; j++){
                arr[j] = arr[j + 1];
            }
        arr[arr.length - 1] = f;
    }
    return arr;
};
