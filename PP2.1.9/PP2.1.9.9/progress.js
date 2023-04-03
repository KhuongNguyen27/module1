function Check1(){
    let result1= "Không chia hết";
    let number1= document.getElementById("a").value;
    let number2= document.getElementById("b").value;
    if (number1%number2==0)
        result1= "Chia hết";
    document.getElementById('result1').innerHTML = result1;
}
function Check2(){
    let result2="Không đủ điều kiện";
    let old= document.getElementById('old').value;
    console.log(old);
    if(old>=16)
        result2="Đủ điều kiện";
    document.getElementById('result2').innerHTML=result2;
}
function Check3(){
    let result3="";
    let number= document.getElementById('int').value;
    console.log(number);
    if(number>0)
        result3="lớn hơn 0";
    else if (number<0)
        result3="bé hơn 0";
    else
        result3="bằng 0";
    document.getElementById('result3').innerHTML=result3;
}
function Check4(){
    let number1= document.getElementById('int1').value;
    let number2= document.getElementById('int2').value;
    let number3= document.getElementById('int3').value;
    console.log(number1);
    console.log(number2);
    console.log(number3);
    let result4 = Math.max(number1, number2, number3);
    console.log(result4);
    document.getElementById('result4').innerHTML=result4;
}
function Check5(){
    let exam1= parseInt(document.getElementById('exam1').value);
    let exam2= parseInt(document.getElementById('exam2').value);
    let exam3= parseInt(document.getElementById('exam3').value);
    let result5="";
    let dtb=(exam1+exam2+exam3)/3;
    console.log(dtb);
    switch(true){
        case (dtb>=8.5): 
            result5="Học lực giỏi"; 
            break;
        case (dtb<8.5 && dtb>=6.5): 
            result5="Học lực khá"; 
            break;
        case (dtb<6.5 && dtb>=4): 
            result5="Học lực trung bình";
            break;
        default:
                result5="Học lực yếu";
                break;
        }    
        document.getElementById('result5').innerHTML=result5;
}
function Check6(){
    let sell= document.getElementById('Sell-ed').value;
    let result6="";
        if (sell<500)
            result6="Chưa đạt KPI nhận thưởng"
            else if (sell>=500 && sell<1500)
                result6="đạt KPI-1 : thưởng 1tr đồng";
                else if (sell>=1500 && sell<2000)
                    result6="đạt KPI-2 : thưởng 3tr đồng";
                    else if (sell>=2000)
                        result6="Đạt KPI-3 : thưởng 5tr đồng(sau sp thứ 2000, mỗi sản phẩm bán ra thưởng 10k)";
    document.getElementById('result6').innerHTML=result6;
}
function Check7(){
    let phone=document.getElementById('phone').value;
    let result7;
        if (phone<100)
            result7 = phone*3300;
            else if (phone>=100 && phone<250)
                result7 = phone*3200;
                else if (phone>=250 && phone<500)
                    result7 = phone*3000;
                    else
                        result7 = phone*2800;
        document.getElementById('result7').innerHTML= result7+"đ";        
}