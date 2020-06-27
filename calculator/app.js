function getInput(num){

    var result = document.getElementById("result");
   result.value += num;
}
function clearResult(){
    var result = document.getElementById("result");
    result.value = "";
}
function finalResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}

function back(){
    var result = document.getElementById("result");
    result.value = result.value.slice(0,result.value.length-1);
}