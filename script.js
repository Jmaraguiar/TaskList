
var addButton = document.getElementById("add");
var redefList = document.getElementById("redef");
var val = document.getElementById("txt");
var list = [];
var tagged = false;

function active(){
    let input= document.getElementById("txt").value;

    if(input == ""){
        alert("digite uma tarefa");
    }
    else if (input.length > 80){
        alert("não é permitido mais de 80 dígitos")
    }
    else{
        addInList(input);       
    }
    
}

function addInList(task){
    if(task == null || task == ''){}
    else{
        list.push(task)
        console.log(list)
        showList();
        location.reload();
    }
    
}

function showList(){
    let ul = document.getElementById("list");
    ul.innerHTML = '';


    for(item of list){

        var pos = list.indexOf(item);

        let element = document.createElement('li');
        let textItem = document.createTextNode(item);
        element.appendChild(textItem);
        ul.appendChild(element);
        element.setAttribute('onclick','taskComplete(this)')
    

        let bt = document.createElement('button');
        bt.innerHTML = "DELETE";
        ul.appendChild(bt);
        bt.setAttribute("onclick",`delOne(${pos})`)


    }

    localStorage.setItem("list",JSON.stringify(list));
    
}

onload = function(){
 list = JSON.parse(localStorage.getItem("list"));
 showList();
    

}

function delOne(pos){
    list.splice(pos,1);
    showList();
}


function delAll(){
    list = [];
    localStorage.setItem("list",JSON.stringify(list));
    location.reload();

}

function taskComplete(item){

    if (!tagged){
        item.style.backgroundColor = 'rgba(70, 70, 70, 0.205)'
        item.style.textDecoration = 'line-through'
        tagged = true
    }
    else {
        item.style.backgroundColor = 'white'
        item.style.textDecoration = 'none'
        tagged = false
    }

}








