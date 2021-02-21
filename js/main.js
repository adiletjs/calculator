const $inputVal = document.querySelector('.input'),
      $result = document.querySelector('.result');
function  input(val){
    $inputVal.value = $inputVal.value + val
}
function calculate(){
    if (eval($inputVal.value) == undefined){
        $result.value = '0'
        $inputVal.value = '0'
    }else if (eval($inputVal.value)==Infinity){
        $result.value = '0'
        $inputVal.value = 'делить на ноль нельзя'
    }
    $result.value = eval($inputVal.value);
    $inputVal.value = eval($inputVal.value)
}
function reset(){
    $result.value = '0'
    $inputVal.value = '0'
}
function backspace(){
    $inputVal.value = $inputVal.value.substring($inputVal.value.length - 1)
}