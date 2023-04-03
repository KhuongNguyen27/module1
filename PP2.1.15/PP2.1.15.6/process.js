function checkPalin(){
    let palin = document.getElementById("string").value;    
    let n = palin.length-1;
    let check = 0;
    for(let i=0 ; i < parseInt(palin.length/2) ; i++ )
    {
        if( palin[i] != palin[n] ){
            check += 1;
        }
        n--;
        }
    if(check==0)
        document.getElementById("result").innerHTML = true;
    else    
        document.getElementById("result").innerHTML = false;
}