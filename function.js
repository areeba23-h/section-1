function addNums(a, b){


   var c = a+b;

    // console.log(c);
    return c;
}

const result = addNums(3, 4);
// console.log(c);

console.log(result);

const getAvg = function(a, b, c){
    return (a+b+c)/3;
}

const avg = getAvg(3, 4, 5);
console.log(avg);


const fact = factorial(5)
console.log(fact);

const sumprod = (a, b) =>{
    const sum = a+b;
    const prod = a*b;

    return [sum,prod]
}

const [s,p] = sumprod(3, 6);
console.log(s, p);

const [a, b, c]=[3, 45, 2];
console.log(c);

//write a function to print fibbonacci series upto 10 terms

