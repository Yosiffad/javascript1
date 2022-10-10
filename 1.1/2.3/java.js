function find(squ){
    if (!(Number.isInteger(Math.sqrt(squ))))
        return -1;

    else {
        let number= Math.floor((Math.sqrt(squ)))+1;

    return number**2;
    }
}
console.log(find(121));
console.log(find(625));
console.log(find(114));