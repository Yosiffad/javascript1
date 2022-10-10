function cent(theyear){

    if(theyear%100===0)
    return theyear/100;

    else 
    return (Math.floor(theyear/100))+1;
}



console.log(cent(1601));
console.log(cent(2000));
