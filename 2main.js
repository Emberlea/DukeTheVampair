function replay(){
    window.location="index.html";
}

name1=localStorage.getItem("key1");
name2=localStorage.getItem("key2");

document.getElementById("scorep1").innerHTML=name1 + " : ";
document.getElementById("scorep2").innerHTML=name2 + " : ";

score1=0;
score2=0;

document.getElementById("scorea").innerHTML=score1;
document.getElementById("scoreb").innerHTML=score2;

document.getElementById("question").innerHTML=name1;
document.getElementById("answer").innerHTML=name2;

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;

    answerreal=parseInt(number1) * parseInt(number2);
    
    d="<h4>"+number1+"X"+number2+"</h4>";
    o="<br><br>Answer: <input type='text' id='text'>";
    g="<br><br><button id='b1'>Check</button>";

    var all=d+o+g;

    document.getElementById("output").innerHTML=all;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}