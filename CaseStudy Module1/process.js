let GPS = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,1,2,1,1,1,1,3,1],
    [1,0,0,0,1,1,0,0,0,1],
    [1,1,2,0,0,0,0,1,2,1],
    [1,1,1,1,1,1,1,1,1,1]
]
class Count{
    constructor(count=15){
        this.count = count;
    }
    resetCount(){
        this.count = 15;
    }
    getCount(){
        return this.count;
    }
    isEmpty(){
        if(this.count>=0)
            return true
        else
            return false
    }
    decearseCount(){
        if(this.isEmpty()){
            this.count--
    }}
    countDisplay(){
        document.getElementById("Countstep").innerHTML = "&nbsp"+this.getCount();
    }
}
class Coin{
    constructor(){
        this.coin = 0
    }
    resetCoin(){
        this.coin = 0;
    }
    getCoin(){
        return this.coin
    }
    upCoin(){
        this.coin++
    }
    coinDisplay(){
        document.getElementById("CoinCount").innerHTML = "&nbsp"+this.getCoin();
    }
}
class Heart{
    constructor(heart=5){
        this.heart=heart
    }
    getHeart(){
        return this.heart;
    }
    isEmpty(){
        if(this.heart<1)
            return false
        else    
            return true
    }
    decearseHeart(){
        if(this.isEmpty()){
            this.heart -- 
        }
    }
    heartDisplay(){
        document.getElementById("heartCount").innerHTML = "&nbsp"+this.getHeart();
    }
}
class BackGround{ 
    constructor(GPS,i,j){
        this.i = i;
        this.j = j;
        this.countf = null;
        this.coinf = null;
        this.heartf = null;
        this.check = true;
        this.score = 0;
        this.GPS = GPS;
    }   
    connectCount(count){
        this.countf=count;
    }
    connectHeart(heart){
        this.heartf = heart;
    }
    connectCoin(Coin){
        this.coinf = coin;
    }
    checkStatus(i,j){
        this.i = i;
        this.j = j;
        if(GPS[this.i][this.j]==0){
            this.check=true;
            this.countf.decearseCount();
            this.countf.countDisplay();
            this.checkCountCoin();
        }
        if(GPS[this.i][this.j]==1){
            this.check=false;
            alert("You Die");
            this.resetLoad();
        }
        if(GPS[this.i][this.j]==2){
            this.check=true;
            this.GPS[this.i][this.j] = 0;
            (i==1 && j==3) ? document.getElementById("Coin1").src="image/starlight.png" : (i==3 && j==2) ? document.getElementById("Coin2").src="image/starlight.png" : document.getElementById("Coin3").src="image/starlight.png"
            this.checkCountCoin();
            this.countf.decearseCount();
            this.countf.countDisplay();
            this.coinf.upCoin();
            this.coinf.coinDisplay();
        }
        if(GPS[this.i][this.j]==3){
            alert("You win "+this.winload())
            document.write('<img src="image/UWin.jpg" id=""style="position:absolute; top: 160px;  left: 355px; " width="660px" height="320px"></img>')
        }
    }
    checkCountCoin(){
        if(this.countf.isEmpty()==false){
            this.check=false; 
            alert('You had not Count')
            this.resetLoad();
        }
        if(this.heartf.isEmpty()==false){
            this.check=false; 
            this.resetLoad();     
        }
    }
    winload(){
        this.score = this.heartf.getHeart()*100 + this.coinf.getCoin()*20 + this.countf.getCount()*10;
        return this.score;
    }
    resetLoad(){
        this.coinf.resetCoin();
        this.countf.resetCount();
        if(this.heartf.isEmpty()==false){
            alert('You have not enough Heart, Please press F5 to play again')
            document.write('<img src="image/YouLost.png" id=""style="position:absolute; top: 160px;  left: 355px; " width="660px" height="320px"></img>')
        }else{
            this.heartf.decearseHeart();
            this.countf.countDisplay();
            this.coinf.coinDisplay();
            this.heartf.heartDisplay();
            var main = document.getElementById("maingame")
            main.style.left = 140+"px";
            main.style.top = 110+"px";
            document.getElementById("Coin1").src="image/Coin.png"
            document.getElementById("Coin2").src="image/Coin.png"
            document.getElementById("Coin3").src="image/Coin.png"
            GPS[1][3] = GPS[3][2] = GPS[3][8] = 2 
        }}
        getCheck(){
            if(this.check)
            return true
        else
            return false
    }
}
function leftArrowPressed(){
    var element = document.getElementById("maingame");
    element.style.left = parseInt(element.style.left) - 128 + 'px';
}
function upArrowPressed(){
    var element = document.getElementById("maingame");
    element.style.top = parseInt(element.style.top) - 110 + 'px';
}
function rightArrowPressed(){
    var element = document.getElementById("maingame");
    element.style.left = parseInt(element.style.left) + 128 + 'px';
}
function downArrowPressed(){
    var element = document.getElementById("maingame");
    element.style.top = parseInt(element.style.top) + 110 + 'px';
}
let i=1,j=1;
let background = new BackGround(GPS,1,1);
let heart = new Heart();
let count = new Count();
let coin = new Coin();
background.connectHeart(heart);
background.connectCount(count);
background.connectCoin(coin);
function moveSelection(evt){
    switch(evt.keyCode){
        case 37:
            j--
            leftArrowPressed();
            background.checkStatus(i,j)
            if(background.getCheck()==false){i=1,j=1}
            break;
        case 39:
            j++
            rightArrowPressed();
            background.checkStatus(i,j)
            if(background.getCheck()==false){i=1,j=1}
            break;
        case 38:
            i--
            upArrowPressed();
            background.checkStatus(i,j)
            if(background.getCheck()==false){i=1,j=1}
            break;
        case 40:
            i++
            downArrowPressed();
            background.checkStatus(i,j)
            if(background.getCheck()==false){i=1,j=1}
            break;
        }}
function reLoad(){
    // let audio = new Audio('music/musicPlay.mp3');
    // audio.play();
    window.addEventListener("keyup",moveSelection);
    }