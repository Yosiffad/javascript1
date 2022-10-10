function bool(arr){

    let on=0 , off=0;

    for (let i=0; i<arr.length; i++){

        on = on + arr[i][0];
        off= off + arr[i][1];
    }

    return on - off;
}
let arr = [[5,4],[1,7]];
console.log(bool(arr));