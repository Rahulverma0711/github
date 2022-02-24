function outer(){
    inner();
    function inner(){
        console.log(b);

    }
}
let b=5;
outer();
console.log(b);
console.log("Rahul")