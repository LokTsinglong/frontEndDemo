// alert("succeed!")
// function for adding new data
function addRow(){
    var table=document.getElementById("table1");
    var length=table.rows.length;
    console.log(length);
    // insert row dot
    var newRow=table.insertRow(length);
    console.log(newRow);
    // insert column dot object
    var nameCol= newRow.insertCell(0);
    var phoneCol=newRow.insertCell(1);
    var operationCol=newRow.insertCell(2);
    // add content
    nameCol.innerHTML = "Undefined";
    phoneCol.innerHTML="Null";
    operationCol.innerHTML="<button onclick='editRow(this)'>edit</button> <button  onclick='deleteRow(this)'>delete</button>"
} 

// function for deleting rows
function deleteRow(button){
    // console.log(button);
    var row = button.parentNode.parentNode;
    // button->td->tr tree structure
    console.log(row);
    row.parentNode.removeChild(row);
    // 从父节点来删除子节点

}

function editRow(button){
    var row = button.parentNode.parentNode;
    var name = row(0);
    var phone = row(1); 
    var inputName = prompt("Pls enter the name");
    var inputPhone = prompt("Pls enter the Phone Num");
    name.innerHTML = inputName;
    phone.innerHTML = inputPhone;
}