const nums = [1, 2, 3, 4, 5, 6];

for(let i=0; i<nums.length; i++){
    console.log( nums[i] );
}

console.log('--------for of loop--------');

for( let n of nums ){
    console.log(n);
}

console.log('--------for each function--------');

nums.forEach( (a, b, c, d) => { console.log(a, b, c, d) } );

const nums2 = [3, 6, 9, 7, 12, 2, 19];

for( let n of nums2){
    console.log(n**2);
}

nums2.forEach( (n) => {console.log(n**2)} );

nums2.forEach( (n) => {
    if(n%2==0){
        console.log(n);
     }
});

const numsqr = [];
for(let n of nums2){
    numsqr.push(n ** 2);
}

console.log(numsqr);

const numsqr2 = nums2.map( (a) => { return a**2 });

console.log(numsqr2);

const prices = [ 2300, 140, 990, 2730, 220, 12000 ];

const finalprices = prices.map( (p) => { return p*0.18 +p });

console.log(finalprices);

const names = ['raju', 'pinki', 'kaliya', 'chintu'];
console.log( 'abc'.toUpperCase() );

const uppername = names.map( (name) => { return name.toUpperCase} );
 console.log(uppername);

 const prices2 = ['$234.88', '$899.999', '$789.4', '$234.56'];
//  [234, 900, 789, 235]

const intPrices = prices2.map( (p) => { return parseInt(p.slice(1)) } );
console.log(intPrices);

const evenNums = nums2.filter( (n) => { return n % 2 === 0});
console.log(evenNums);

const largeprices = prices.filter( (p) => { return p>1000; });
console.log(largeprices);

const friendname = ['Areeba', 'Arti', 'Shikha', 'Shrishti', 'Insha'];
const friendname2 = friendname.filter( (n) => {return n.length >= 5} );
console.log(friendname2);

const array = [1, 4, 9, 16, 25];
const squareRoots = array.map( (num) => { return Math.sqrt(num)} );
console.log(squareRoots);





 






