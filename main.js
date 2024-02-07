//1
for ( let i = 0 ; i <= 135; i++)
{
    console.log(i);
}

//2

for ( let i = 1 ; i <= 135; i+=2)
{
    console.log(i);
}

//3 

let sum = 0;
for ( let i = 1 ; i <= 135; i++)
{
    sum+=i;
    console.log('the number is '+ i +'the sum is '+ sum);
}

//4 
let x =[1, 4, 2, 12,30,"basem"];

for (let index = 0; index < x.length; index++) {
    console.log(x[index]);
    
}


// from mater class 5-2-2-24
const nums = [1,2,3,4];

for(let num of nums){
    console.log(num);
}


//5 
 let xx = [2,-3,-1]
 let maxNum = xx[0];

 for(let index= 0; index<xx.length; index++)
 {
    if(x[index] > maxNum) {
        maxNum = xx[index];
    }
 }
console.log(maxNum);


//6 

let xxx = [2, 1, 3];

let averageNum = xxx[0]/ xxx.length;

console.log(averageNum);

//7. 
const X = [2, -1, 4, -3];
for (let i = 0; i < X.length; i++) {
  if (X[i] < 0) {
    X[i] = 0;
  }
}
console.log(X);

//8. 
let x=[1,4,6,-7,-1,9,8,0,-54]
for(let i=0; i<=x.length; i++){
    if(x[i]<0){
     x[i]= 'turing'
    }
}
console.log(x);
