alert("hello. I know this page doesnt looks like a big deal but I actually had put a quite a lot of effort in it. Hope you like it (in mobile, it looks weird😓😔. ");
alert("Make sure to use chorme. Ive made changes according to chorme mobile version. So, if you use else, it may look more weirder. use chorme mobile to get the best experience");
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
var images=[
    "https://dl.dropboxusercontent.com/s/luwvzsgyn2c5hl2/121197727_633126467593445_1021320975722596853_n.jpg?dl=0",
    "https://dl.dropboxusercontent.com/s/846css6u5aq3ypp/121225415_253655309398328_7341788254976407301_n.jpg?dl=0",
    "https://dl.dropboxusercontent.com/s/97177f9sbm2vsjc/121207460_659856264926273_8040154894036616566_n.jpg?dl=0",
    "https://dl.dropboxusercontent.com/s/qivp0ro5gf97gmt/121196382_2712173595705782_7617930030571073722_n.jpg?dl=0",
    "https://dl.dropboxusercontent.com/s/7d05h3gkjo3nlmu/121150498_3949564778388234_5443394368141926522_n.jpg?dl=0",
    "https://dl.dropboxusercontent.com/s/3uoupf1xwqsikej/121239511_261008068555244_2763866198441190182_n.jpg?dl=0"
    ];
var num=0;
function next(){
    var slider=document.getElementById("slider");
    num++;
    if(num >= images.length){
        num=0;
    }
    slider.src= images[num];
}
function prev(){
    var alider=document.getElementById("slider");
    num--;
    if(num < 0){
        num=images.length-1;
    }
    slider.src=images[num];
}
