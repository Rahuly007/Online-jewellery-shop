//var
//let
//const
/* function add(){
    a=10
    b=20
    c=a+b
    console.log(c)
}
*/
function add(a,b){
    c=a+b;
    console.log(c);
}
function sub(a,b){
    c=a-b
    console.log(c);
}
function mul(a,b){
    c=a*b
    console.log(c);
}

module.exports.addition =add
module.exports.substraction =sub
module.exports.multiplication =mul