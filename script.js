function showImg(){
    let image = document.getElementById("bullets");
    document.getElementById("text").innerHTML = "Not those type of bullets";
    document.getElementById("bullets").style.display = "block";
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "block";
}

function makeList(){
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    li1.appendChild(document.createTextNode("My favorite food is waffle"));
    li2.appendChild(document.createTextNode("My favorite adjective is waffling"))
    li3.appendChild(document.createTextNode("I have 2 younger brothers."))
    document.getElementById("list").appendChild(li1);
    document.getElementById("list").appendChild(li2);
    document.getElementById("list").appendChild(li3);
    document.getElementById("lowerText").innerHTML = "Much better!";
    document.getElementById("button2").style.display = "none";
}
