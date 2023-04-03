function check01(){
    let number = document.getElementById("input01").value;
    document.getElementById("binhphuong").innerHTML="Bình phương của " + number + " = " + (number*number);
}
function check02(){
    const PI = 3.1415;
    let number = document.getElementById("input02").value;
    document.getElementById("chuvi").innerHTML="Chu vi hình tròn có bán kính " + number + " = " + ((number*2)*PI);
    document.getElementById("bankinh").innerHTML="Diện tích hình tròn có bán kính " + number + " = " + ((number*number)*PI);
}
function check03(){
    let number = document.getElementById("input03").value;
    let total=1;
    for(let i=1;i<=number;i++){
        total *=i;}
    console.log(total);
    document.getElementById("giaithua").innerHTML="Giai thừa " + number + "! = " + total;
}
function check04(){
    let string = document.getElementById("input04").value;
    let check;
    let stringCheck = parseInt(string);
    string == stringCheck ? check= true : check = false;
    document.getElementById("checkTF").innerHTML = check;
}
function check05(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
    document.getElementById("min3so").innerHTML ="Giá trị nhỏ nhất = " + Math.min(num1,(Math.min(num2,num3)));
}
function check06(){
    let intA = document.getElementById("intA").value;
    intA = parseFloat(intA);
    let intB = parseInt(intA);
    let checkFloat = intA - intB;
    let check;
    if(intA == 0)
        check = "   0";
    else if ( checkFloat != 0){
        check = " số thực";}
    else if (intA > 0){
        check = " nguyên dương";}
    else{
        check = " nguyên âm";}
    document.getElementById("intReturn").innerHTML = intA + " là số "+check ;
}
function check07(){
    let numA = document.getElementById("numA").value;
    let numB = document.getElementById("numB").value;
    numA = parseInt(numA);
    numB = parseInt(numB);
    numA = numA + numB;
    numB = numA - numB;
    numA = numA - numB;
    document.getElementById("doi2so").innerHTML = "Giá trị A : " + numA + "<br>" + "Giá trị B : "+ numB ;
}
let i=0;
let array = Array();
function addArray(){
    array[i] = document.getElementById("addAray").value;
    console.log(array[i]);
    i++; 
    document.getElementById("addAray").value = "";
}
function displayArray(){
    let converterArray = "";
    for(i = array.length-1; i >= 0 ; i--)
        converterArray += "Array[" +i+ "] = " + array[i] + " <br> ";
    document.getElementById("converterArray").innerHTML = converterArray;
}
function findWord(){
    let Dad = document.getElementById("stringDad").value;
    let Son = document.getElementById("stringSon").value;
    let re_turn="Kí tự " + Son + "<br>";
    for( i=0 ; i < Dad.length ; i++)
        if(Son == Dad[i])
            re_turn += "Xuất hiện tại vị trí "+ i + "<br>"
    document.getElementById("findWord").innerHTML = re_turn;
    
}