console.log(2)
//varaibles=> var, const, let

var a=10;
var a=80;//can be re-declared,can be reassigned

{
    var a=12;
}
console.log(a);
let b=7;
//it is a block scope
{
    b=8;

}  //can reassign a value 
console.log(b);
//let b=8 ;//cannot be reintialised
const c=1;
//c=8;
//console.log(c); //gives error

const c1=9;
console.log(c1);

//data types
console.log("data types");
let num1=5;
let b1=num1;
b1=10;
console.log(num1);
console.log(b1);
console.log("non primitives");
let obj1=
{
    name:'abc',
    age:22
}
console.log(obj1);
let obj2=obj1;
obj2.name='gnana';
console.log(obj1.name);

console.log("functions")
function mul(a,b)
{
    return a*b;
}
function main(){
console.log(mul(2,3));
}
main();

if(0)  //falsey values "",'',null,0,fasle, [" "->space is not a falsy value]
{
    console.log("true")
}
else{
    console.log("false")
}
console.log(5-"5") //0 can perform /,%,*
console.log(5+"5") //55 string concatenation
console.log(5=='5')//checks values
console.log(5==='5')//checks datatypes ,gives false

//arrays

console.log("Arrays")//heterogenous elements