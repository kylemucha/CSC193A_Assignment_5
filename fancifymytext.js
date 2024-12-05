function Bigger(){
    document.getElementById("textarea").style.fontSize = "1.5em";
}

function FancyShmancy(){
    document.getElementById("textarea").style.fontWeight = "bold";
    document.getElementById("textarea").style.color = "blue";
    document.getElementById("textarea").style.textDecoration = "underline";
}

function Normal(){
    document.getElementById("textarea").style.fontWeight = "normal";
    document.getElementById("textarea").style.color = "black";
    document.getElementById("textarea").style.textDecoration = "none";
} 

function Mooify(){
    document.getElementById("textarea").style.textTransform = "uppercase";
    Suffix();
}

function Suffix(){
    var text = document.getElementById("textarea").value;
    var mooText = text.split(" ");
    var str = mooText.join("Moo ");
    document.getElementById("textarea").value = str;
}