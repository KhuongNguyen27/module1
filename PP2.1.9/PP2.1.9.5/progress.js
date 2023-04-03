function reset(){
    document.getElementById("input").value ="";
}
function progress(value){
    let put_id = document.getElementById("input").value;
        put_id += value;
        // hiển thị button vừa onclick lên input
        document.getElementById("input").value = put_id;
    }
function result(){
    let put_id = document.getElementById("input").value; 
    let result = eval(put_id);
        console.log(result);
        // trả kết quả về lại ô input 
        document.getElementById("input").value = result;
}