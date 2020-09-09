//adding remove button to each task
var NodeList = document.querySelectorAll(".default");
var i;
for(i = 0; i < NodeList.length; i++) {
  var createButton = document.createElement("span");
  var txt = document.createTextNode("Remove");
  createButton.appendChild(txt);
  createButton.className = "btn";
  NodeList[i].appendChild(createButton)
}

//adding edit button to each task
for(i = 0; i < NodeList.length; i++) {
  var createEdit = document.createElement("span");
  var txtNode = document.createTextNode("Edit");
  createEdit.appendChild(txtNode);
  createEdit.className = "editbtn";
  var editInput = document.createElement('input');
  editInput.className = "inputForEdit"
  editInput.placeholder = "Enter New Text";
  NodeList[i].appendChild(createEdit);
  NodeList[i].appendChild(editInput);
}

//adding new element to tasks
var add = document.getElementById('AddBtn');
add.onclick = function() {
  var input = document.getElementById("inputField").value;
  var newTask = document.createElement("p");
  var newTxtNode = document.createTextNode(input);
  newTask.appendChild(newTxtNode);
  var parent = document.getElementById('container');
  var createRemove = document.createElement("span");
  var RemoveTxtNode = document.createTextNode('Remove');
  createRemove.appendChild(RemoveTxtNode);
  createRemove.className = "btn";
  newTask.appendChild(createRemove);
  var createEdit = document.createElement("span");
  var EditTxtNode = document.createTextNode('Edit');
  createEdit.appendChild(EditTxtNode);
  createEdit.className = "editbtn"
  var editInput = document.createElement('input');
  editInput.className = "inputForEdit"
  editInput.placeholder = "Enter New Text";
  newTask.appendChild(createEdit);
  newTask.appendChild(editInput);
  parent.appendChild(newTask);

  //removing elements from newly added
  var removeElement = document.querySelectorAll('.btn');
  for(i = 0; i < removeElement.length; i++) {
  console.log('hi');
  removeElement[i].onclick = function() {
    var parentElement = this.parentElement;
    parent.removeChild(parentElement);
  }
}

//edit elements from newly added
var editElemement = document.querySelectorAll('.editbtn');
for(i = 0 ; i < editElemement.length ; i++) {
  editElemement[i].onclick = function() {
    var parentElement = this.parentElement
    parentElement.childNodes[3].setAttribute("style","display:block");
    if(parentElement.childNodes[3].value != "") {
    parentElement.firstChild.nodeValue = parentElement.childNodes[3].value; 
    parentElement.childNodes[3].value = "";
    parentElement.childNodes[3].setAttribute("style","display:none");
  }
    
  }
}
  document.getElementById('inputField').value = "";
}

//remove elements from list
var parent = document.getElementById('container');
var removeElement = document.querySelectorAll('.btn');
for(i = 0; i < removeElement.length; i++) {
  console.log('hi');
  removeElement[i].onclick = function() {
    var parentElement = this.parentElement;
    parent.removeChild(parentElement);
  }
}


//edit Elements from list

var editElemement = document.querySelectorAll('.editbtn');
for(i = 0 ; i < editElemement.length ; i++) {
  editElemement[i].onclick = function() {
    var parentElement = this.parentElement
    parentElement.childNodes[3].setAttribute("style","display:block");
    if(parentElement.childNodes[3].value != "") {
    parentElement.firstChild.nodeValue = parentElement.childNodes[3].value;
    parentElement.childNodes[3].value = ""; 
    parentElement.childNodes[3].setAttribute("style","display:none");
  }
  }
}