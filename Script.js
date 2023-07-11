// var a = 5
// var b = 10
// var c = a+b
// var d = a-b
// var e = a*b
// var f = a/b
function add(){
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = a+b;
    document.getElementById("add").innerHTML= c;
}
function sub(){
    var a = (document.getElementById("n1").value);
    var b = (document.getElementById("n2").value);
    var c = a-b;
    document.getElementById("sub").innerHTML= c;
}
function mult(){
    var a = (document.getElementById("n1").value);
    var b = (document.getElementById("n2").value);
    var c = a*b;
    document.getElementById("mult").innerHTML= c;
}
function divide(){
    var a = (document.getElementById("n1").value);
    var b = (document.getElementById("n2").value);
    var c = a/b;
    document.getElementById("divide").innerHTML= c;
}

// function sub(){
//     document.getElementById("demo").innerHTML= d;
// }
// function mult(){
//     document.getElementById("demo").innerHTML= e;
// }
// function divide(){
//     document.getElementById("demo").innerHTML= f;
// }