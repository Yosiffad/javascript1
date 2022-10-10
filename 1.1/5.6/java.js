function maskify(string){
    let Star = "";
    let four = string.slice(string.length-4,string.length);

    if (string.length<=4) return string;

    for (let i=0; i<string.length-4; i++){

        Star= Star+"#";
    }

 return Star + four;
}
console.log(maskify("512155564"));
console.log(maskify(      "4578"));
console.log(maskify(           "1"));
