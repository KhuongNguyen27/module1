let result = 0;
function alertMessage() {
  alert("Xin chao");
}
// alertMessage();
function check02() {
  number = document.getElementById("int").value;
  document.getElementById("result").innerHTML = " = " + (parseInt(number) + 1);
}
function check03() {
  let numA = parseInt(document.getElementById("numa").value);
  let numB = parseInt(document.getElementById("numb").value);
  if (numA > numB)
    document.getElementById("result2").innerHTML = "Giá trị A lớn hơn B";
  else
    document.getElementById("result2").innerHTML = " = " + (numA + numB);
}
function addNumbers() {
  let firstNum = 4;
  let secondNum = 8;
  let re_turn = 0;
  document.getElementById("re_turn1").innerHTML=" = "+re_turn; 
  re_turn= firstNum + secondNum;
  document.getElementById("re_turn2").innerHTML=" = "+re_turn; 
  }
function nameStar(){
    let name1 = ["Polaris","Aldebaran","Deneb","Vega","Altair","Dubhe","Regulus"]    
    let name2 = ["Ursa Minor","Tarurus","Cygnus","Lyra","Aquila","Ursa Major","Leo"]
    let nameStar = document.getElementById("star").value;
    for(let i=0; i <= name1.length;i++){
        if(name1[i] == nameStar){
            document.getElementById("result3").innerHTML= name2[i];  
            break;
        }
        if(i=name1.length)
        document.getElementById("result3").innerHTML= "Không tìm thấy tên ngôi sao";  
    }
}