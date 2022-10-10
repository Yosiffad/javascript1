function Star(number, string){
    let Star="";

    for(let i=0; i<number; i++)

    Star=Star + string;

    return Star;
}
console.log(Star(3,"israel"));