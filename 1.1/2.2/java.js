function Benary(arr){

    let index=0;
    let sum1=0;
    for (let i=arr.length-1; i>0; i--){
        if (arr[i]===1) sum1=sum1+(2**index);
    index++;
    }
 return sum1;
}
let arr= [1, 1, 1, 1];
console.log(Benary(arr));

 arr= [1, 1, 0, 1];
console.log(Benary(arr));