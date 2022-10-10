function year(pirc, p1, aug1,p){

    let percent1=p1/100;

    let yearCount=0;

    let val =0;

    while(val < p){

        val = pirc + (pirc*percent1) + aug1;
        pirc = val;
        yearCount++;
    }
    return yearCount;
}

console.log(year(500,3,80,120));
console.log(year(1800, 2, 90, 450));