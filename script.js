function insert(number){
    var currentNumber = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = currentNumber + number;
}

function clean(){
    document.getElementById('resultado').innerHTML = '';
}

function deleteNumber(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML = ('Nada Para Calcular!');
    }
}