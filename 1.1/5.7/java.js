function test(string){

    let len=0;
    let min = string.len;

    if (!string.includes(" ")) return string.len;

    for (let i=0; i<string.len; i++){
        if (string[i]!==" "){
            len++;
        } 
        else {
            if (len < min) min=len;

            len=0;
        }
    }
    return min;
}
console.log (test("i am fine?"));
console.log (test("hi "));
console.log (test("are you sure?"));