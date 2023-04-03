let product = Array();
let i=0;
function addArray(){
    product[i] = document.getElementById("newPD").value;
    alert("Add "+ product[i] + " in " + i)
    let displayArray = Array();
    i++;    
    displayArray = product;
    document.getElementById("disArray").innerHTML = displayArray[i];
    displayArray = "";
}
function editButton(){

}
