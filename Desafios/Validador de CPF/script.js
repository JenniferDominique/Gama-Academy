console.log("Javascript carregado");

function validaCPF(cpf){
    
    if(cpf.length != 11){
        return false;
    }
    else{
        var numeros = cpf.substring(0,9); 
        //pega todos os caacteres desde o primeiro item ate o 9º
        var digitos = cpf.substring(9);

        var soma = 0;
        for(var i = 10; i > 1; i--){
            soma += numeros.charAt(10 - i) * i;
            //charAt - retorna a posição daquela string na lista
        }
        console.log('Soma1: ' + soma);

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
        //o resto da divisao de soma por 11 eh menor que 2 ?
        //se sim entao resultado = 0
        //se não resultado = 11 - (soma % 11)

        //validacao do 1º digito do cpf
        if (resultado != digitos.charAt(0)){
            //resultado diferente do numero da dezena dos digitos do cpf
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0, 10);

        for(var k = 11; k > 1; k--){
            soma += numeros.charAt(11 - k) * k;
        }
        console.log('Soma2: ' + soma);

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        //validacao do 2º digito do cpf
        if (resultado != digitos.charAt(1)){
            return false;
        }

        return true;
    }
    
}

function validacao(){

    var cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);

    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var resultValid = validaCPF(cpf);

    if(resultValid){ //se o resultado igual a verdadeiro
        document.getElementById('success').style.display = 'block';
    } 
    else{
        document.getElementById('error').style.display = 'block';
    }
}
