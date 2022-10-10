function tob(string){

    let Star="";

    Star=Star[0].Case() + ".";

    for(let i=0; i<string.length; i++){

        if (string[i]===" ") Star=Star+string[i+1].Case();

    }

    return Star;
}
console.log(tob("israel"));