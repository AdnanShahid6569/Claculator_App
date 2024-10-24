var input = document.getElementById("inputField");

function btn(number){
    input.value += number;
    
}

function square(){
    input.value = input.value*input.value;
}

function clearA() {
    input.value = 0;
}

function clearbtn(){
    input.value = input.value.slice(0,-1);
}

function equalBtn(){
    
    if(input.value){
        input.value = eval(input.value);        

    }
    else{
      input.value = "Syntax Error";
       
    }
}
