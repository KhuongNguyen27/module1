function    CsangF(){
    let value = document.getElementById("input01").value;
    document.getElementById("result01").innerHTML = "F= "+(value * (9/5) +32);
}
function    MsangF(){
    let value = document.getElementById("input02").value;
    document.getElementById("result02").innerHTML = "Feet = "+(value * 3.2808);
}
function    Shinhvuong(){
    let value = document.getElementById("input03").value;
    document.getElementById("result03").innerHTML = "S hình vuông = "+(value * value);
}
function    Shinhvuong(){
    let value = document.getElementById("input03").value;
    document.getElementById("result03").innerHTML = "S hình vuông = "+(value * value);
}
function    Schunhat(){
    let value1 = document.getElementById("input04").value;
    let value2 = document.getElementById("input05").value;
    document.getElementById("result04").innerHTML = "S hình chữ nhật = "+(value1 * value2);
}    
function    Stamgiac(){
    let value1 = document.getElementById("input06").value;
    let value2 = document.getElementById("input07").value;
    document.getElementById("result05").innerHTML = "S hình tam giác = "+((value1 * value2)/2);
}
function    Ptb1(){
    let value1 = document.getElementById("input08").value;
    let value2 = document.getElementById("input09").value;
    document.getElementById("result06").innerHTML = "X = "+(-value2/value1);
}
function Ptb2(){
    let value1 = document.getElementById("input10").value;
    let value2 = document.getElementById("input11").value;
    let value3 = document.getElementById("input12").value;
    let delta = (value2*value2) - (4*value1*value3);
    console.log(delta);
    let result07;
    if(delta < 0 ){
        result07 = "Phương trình vô nghiệm";
    }
    else if (delta == 0)
        result07 = "x1 = x2 = " + -(value2/(2*value1));
            else
                {
                    let x1 = (-value2 + Math.sqrt(delta))/(2*value1);
                    let x2 = (-value2 - Math.sqrt(delta))/(2*value1);    
                    result07 = "x1 = "+ x1 + "<br>x2 = "+x2;
                }
    document.getElementById("result07").innerHTML = result07;        
}
function checkOld(){
    let old = document.getElementById("input13").value;
    console.log(old);
    let check;
    if (old>0 && old<120)
        if(old<=16){
            check = "Bạn " + old + " tuổi-tuổi vị thành niên";
        }else if(old>18){
            check = "Bạn " + old + " tuổi-đủ tuổi đi tù";
                }else{
                    check = "Kiểm tra lại độ tuổi nhập vào";
                }
    console.log(check);
    document.getElementById("result08").innerHTML = check;
}
function checkTamgiac(){
    let a = parseInt(document.getElementById("input14").value);
    let b = parseInt(document.getElementById("input15").value);
    let c = parseInt(document.getElementById("input16").value);
    let check;
    if(a>0 && b>0 && c>0 && a + b > c && b + c > a && a + c> b)
        check = "3 cạnh a,b,c đủ điều kiện"
    else   
        check = "3 cạnh không đủ điều kiện"
    console.log(check); 
    document.getElementById("result09").innerHTML = check;    
}
function tiendien(){
    let num = document.getElementById("input17").value;
        let i=0;
        let total=0;
        let catelog = [1549,1600,2615,2701,2889];
        do{
            if(num>100 && i<5)
                total += 100*catelog[i];
            else
                total += num*catelog[i];
            console.log(num);
            console.log(total)
            num -= 100;
            i++;
        }while (num >0)
    document.getElementById("result10").innerHTML ="Tiền điện tháng này = "+total + "đ";    
}
