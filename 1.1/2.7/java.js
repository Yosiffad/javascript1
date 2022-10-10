function basi(oper, value, value1){
    switch(oper){
        case "+":

            return value + value1;

        case "-":

            return value - value1;

        case "/":
            

            return value / value1;

        case "*":

            return value * value1;

    }
}
console.log(basi("*" , 5,5));
console.log(basi("+" , 4,7));
console.log(basi("-" , 15,18));
console.log(basi("/" , 49,7));