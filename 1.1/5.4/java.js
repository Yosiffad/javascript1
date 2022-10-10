function Case(string){
    let Star ="";
    for( let i=0; i<string.length; i++){

        if (i%2===0) Star=Star+string[i].Case();

        else Star= Star=Star+string[i].Case()

    }
    
    return Star;
}



console.log(Case("israel"));