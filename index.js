alert("hello. I know this page doesnt looks like a big deal but I actually had put a quite a lot of effort in it. Hope you like it (in mobile, it looks weird😓😔.use laptop for better experience)");
var q1 = document.getElementsByName("q1");
var q2 = document.getElementsByName("q2");
var q3 = document.getElementsByName("q3");
var q4 = document.getElementsByName("q4");
var q5 = document.getElementsByName("q5");
var q6 = document.getElementsByName("q6");
var result=0;
function hello(){
    if(q1[0].checked){
        alert("correct😀");
    }else{
        alert(" wrong 😑");
    }
}
function hello1(){
    if(q2[1].checked){
        alert("correct😀")}
        else{
        alert(" wrong 😑");
    }
}
function hello2(){
    if(q3[2].checked){
        alert("correct😀");
    }else{
        alert("I said certificate");
    }
}
function hello3(){
    if(q4[2].checked){
        alert("correct😀");
    }else{
        alert("wrong 😑");
    }
}
function hello4(){
    if(q5[0].checked){
        alert("correct😀");
    }else{
        alert(" wrong 😑");
    }
}
function hello5(){
    if(q6[3].checked){
        alert("correct😀");
    }else{
        alert(" wrong 😑");
    }
}
function score(){
    if(q1[0].checked){
      result+=5;  
    }
    if(q2[1].checked){
        result+=5;
    }
    if(q3[2].checked){
        result+=5;
    }
    if(q4[2].checked){
        result +=5;
    }
    if(q5[0].checked){
        result+=5;
    }
    if(q6[3].checked){
        result+=5;
    }
    if(result = 30){
        alert("congrats!Your score is " + result +"/30 .but you have to admit the questions were super easy");
    }else{
        alert("your score is " + result + "/30 .how did you manage to score less than 30?🤨🤨");
    }
}
