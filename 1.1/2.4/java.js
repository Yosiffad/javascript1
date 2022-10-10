function find(arr){
    let gape,gape1,number;
    let j=0;
    for(let i=2; i< arr.length; i++){

      gape=  arr[j]- arr[j+1];
      gape= arr[j+1]- arr[i];

      if(gape!==0 && gape1!==0) number = arr[j+1];

      else if (gape===0 && gape1==0) number=arr[i];

      else if (gape!==0 && gape1===0) number=arr[j];

      j++;
    }
    return number;
}
console.log(find([, 1, 1, 2, 1, 1 ,1]));
console.log(find([ 0, 0, 0.55, 0, 0 ]));
