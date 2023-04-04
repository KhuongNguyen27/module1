scoreExam = [9,8,7,7,8,10]
var length = scoreExam.length;
function findAvg() {
    let total = 0;
    for (let i = 0; i < length ; i++){
        total += scoreExam[i];
    }
    total = parseInt(total/length);
    document.getElementById('arrayExam').innerHTML = '{&nbsp'+ scoreExam +'&nbsp}';
    document.getElementById('Dtb').innerHTML = total;
}
function insertNumberToArray(value,index){
    let arrayNew = scoreExam;
    if(index > length || index < 0){
        return scoreExam;
    }
    else{
        arrayNew.splice(index,0,value);
        return arrayNew;
    }
}
function checkIndex(){
    let value = document.getElementById('value').value;
    let index = document.getElementById('index').value;
    let result = insertNumberToArray(value,index);
    console.log(result);
    document.getElementById('resultIndex').innerHTML ='{&nbsp'+ result+'&nbsp}'; 
} 
function total(){
    let total=0;
    let number = document.getElementById('totalId').value;
    for(let i = 2 ; i <= number ; i++ ){
        let check = true ;
        let numEnd = Math.sqrt(i);
        if(i==2) check = true;
        for(let j = 2 ; j <= numEnd ; j++ ){
            if( i % j === 0 )
            check = false;
        }        
        if(check){
            total+=i;
        }
    }
    document.getElementById('numberTotal').innerHTML = number;
    document.getElementById('total').innerHTML = total;
}
class Rectangle{
    constructor(){
        this.x = null;
        this.y = null;
        this.width = null;
        this.height = null;
        this.color = null;
    }
    setX(x){
        this.x = x;
    }
    setY(y){
        this.y = y;
    }
    setWidth(){
        this.width = Math.random()*window.innerWidth;
    }
    setHeight(){
        this.height = Math.random()*window.innerHeight;
    }
    setColor(){ 
        return Math.floor(Math.random()*256).toString(16)
    }
    getColor(){ 
        return '#'+ this.setColor()+ this.setColor()+ this.setColor();
    }
    getX(){
        return this.x
    }
    getY(){
        return this.y
    }
    getHeight(){
        return this.setHeight()
    }
    getWidth(){
        return this.setWidth()
    }
}
function Paint(){
    let canvas = document.getElementById("myCanvas").getContext("2d");
    let paint = new Rectangle();
    paint.setX=0;
    paint.setY=0;
    canvas.fillStyle = paint.getColor;
    console.log(paint.getColor());
    canvas.fillRect(paint.getX(),paint.getY(),paint.getWidth,paint.getHeight);
} 