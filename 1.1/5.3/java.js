function C(string){

    let flag=false;

    let Star="";
    for(let i=0; i<string.length; i++){

        if (Star[i]==="-" || Star[i]==="_")  flag =true;
        if (flag==true){

        Star = Star+(string[i]);
        Star = Star+ string[i+1].toUpperCase();

        i++;

        }
        else 
        Star = Star+(string[i]);
        flag=false;

    }
    return Star;
}

console.log(C("the-stealth-warrior"));