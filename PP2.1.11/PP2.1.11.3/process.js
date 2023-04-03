function re_turn(){
    let result="";
    let number = document.getElementById("number").value;
    let i=2;
    let check =true;
    while(i<=number){
        let n = parseInt(Math.sqrt(i));
        for(let j= 2;j<=n;j++)
            if(i%j == 0)
                check = false;
        if(i<=3)
            check =true;
        if(check =true)
            result += i + " ";
        console.log(result)    
        i++;
    }
    document.getElementById("result").value = result;
}