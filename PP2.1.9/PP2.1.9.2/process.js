function leftArrowPressed(){
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 50 + 'px';
}
function upArrowPressed(){
    var element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 50 + 'px';
}
function rightArrowPressed(){
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 50 + 'px';
}
function downArrowPressed(){
    var element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 50 + 'px';
}
function moveSelection(evt){
    switch(evt.keyCode){
        case 37:
            leftArrowPressed();
            console.log(37);
            break;
        case 39:
            rightArrowPressed();
            console.log(39);
            break;
        case 38:
            upArrowPressed();
            console.log(38);
            break;
        case 40:
            downArrowPressed();
            console.log(40);
            break;
        }}
function reLoad(){
    window.addEventListener("keyup",moveSelection);
    }