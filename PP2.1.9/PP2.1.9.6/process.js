let array = [
    ["rabbit1.png","wolf1.png","wolfchaos1.png"],
    ["rabbit2.png","wolf2.png","wolfchaos2.png"],
    ["rabbit3.png","wolf3.png","wolfchaos3.png"]
]

function changeImg1(){
    let i = 0;
    let j = Math.floor(Math.random() * 3);
    document.getElementById("img1").src = "image/"+array[i][j];
}
function changeImg2(){
    let i = 1;
    let j = Math.floor(Math.random() * 3);
    document.getElementById("img2").src = "image/"+array[i][j];
}
function changeImg3(){
    let i = 2;
    let j = Math.floor(Math.random() * 3);
    document.getElementById("img3").src = "image/"+array[i][j];
}
