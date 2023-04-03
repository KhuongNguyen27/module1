length=0;
let array= Array();
function add_array(){    
    array[length] =document.getElementById("ad_array").value;
    console.log(array[length]);
    length++;
    document.getElementById('ad_array').value='';
}
function dis_array(){
    document.write("Array is :{ ")
    for(let i = 0; i<= length - 2;i++)
        document.write(array[i]+' ; ');
    document.write(array[length-1]+" }")
}