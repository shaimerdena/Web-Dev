// const { createElement } = require("react");

document.getElementById("button").onclick = function(){
    const node = document.createElement("li");
    const textNode = document.createTextNode("water");
    node.appendChild(textNode);
    document.getElementById("un_list").appendChild(node);

    const elements = 
    document.getElementsByClassName("demo");
    for(let i=0; i<elements.length; i++){
        elements[i].style.backgroundColor = "navy";
    }
}

const unique = new Set();
fetch('doc.json')
.then(response => response.json())
.then(data => {
    for(let i=0; i < 5; i++){
        unique.add(data[i]);
    }
    console.log(unique);
})
