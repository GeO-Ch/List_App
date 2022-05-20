//Initialize-Declare
let theBtn = document.getElementById('addBtn');
let theDiv = document.getElementById('toDoList');
let cleanBtn = document.getElementById('clean');

cleanBtn.addEventListener('click', function(){
    location.reload();
});

theBtn.addEventListener('click', function(){
    //create the new div element and append it to theDiv.
    let newDiv = document.createElement('div');
    theDiv.appendChild(newDiv);

    //use prompt() to store user input and display it on a paragraph.
    let add = prompt("Add to the list.", "Add...");

    //create elements.
    var para = document.createElement('p'); 
    let dltBtn = document.createElement('button');

    //style elements.
    para.style = 'background-color: #eaf5f5;'


    //define 
    para.innerHTML = add;
    dltBtn.innerHTML = 'Delete';

    //dltBtn function
    dltBtn.addEventListener('click', function(){
        newDiv.removeChild(para);
        newDiv.removeChild(dltBtn);
    });

    //append elements to theDiv.
    newDiv.appendChild(para);
    newDiv.appendChild(dltBtn);
});
