var list=document.getElementById("list");



function addTodo()
{


    var todo_item=document.getElementById("todo-item");


    if (todo_item.value != "" )
    {




    //create li tag width text node
    var li=document.createElement('li');
    li.className="list-group-item";
    var liText=document.createTextNode(todo_item.value);
    li.appendChild(liText);


    //crete delete button
    var delBtn=document.createElement("button");
    var delText=document.createTextNode("DELETE");
    delBtn.className="btn btn-outline-danger btn btn-sm float-right";
    delBtn.setAttribute("onclick","deleteItem(this)");
    delBtn.appendChild(delText);
    


    //crete edit button
    var editBtn=document.createElement("button");
    var editText=document.createTextNode("EDIT");
    editBtn.className="btn-outline-primary btn btn-sm float-right";
    editBtn.style.marginRight="10px";

    editBtn.setAttribute("onclick","editItem(this)");
    editBtn.appendChild(editText);

    


    li.appendChild(delBtn);
    li.appendChild(editBtn);



    list.appendChild(li);

    todo_item.value=""; 
    todo_item.focus();  
    }
    else
    {
        alert("Please write a todo...");
        todo_item.focus();
    } 

}



function deleteItem(e){

    e.parentNode.remove();
}




function editItem(e){

    var val=e.parentNode.firstChild.nodeValue;

    var editValue=prompt("Enter edit value",val);
    
    e.parentNode.firstChild.nodeValue=editValue;
}




function deleteAll()
{
    list.innerHTML="";
}



