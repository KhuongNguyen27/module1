function getConverter(){
    let input = document.getElementById("Fahren").value;
    let result= 0;
    result+= (input-32)/1.8;
    console.log(result);
    document.getElementById("result").innerHTML=result;
}