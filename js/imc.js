// faz o evento de clicar funcionar
document.addEventListener("DOMContentLoaded", function() {
        var btnCalcular = document.getElementById("calcular");
        var btnLimpar = document.getElementById("limpar");

        btnCalcular.addEventListener("click", calcularIMC);
        btnLimpar.addEventListener("click", limpar);
});

// essa parte do codigo faz com que não de erro se a pessoa não escrever nada 
function calcularIMC(){

    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    // Converte vírgula pra ponto automaticamente
    peso   = parseFloat(document.getElementById("peso").value.replace(",", "."));
    altura = parseFloat(document.getElementById("altura").value.replace(",", "."));

    if (isNaN(peso) || isNaN(altura) || peso<= 0 || altura<=0){
        alert("por favor, preencha o peso e altura corretamente!");
        return;
    }
// essa parte do codigo é aonde vai ser calculado o imc 
    var imc = peso / (altura * altura);
    imc= imc.toFixed(2);

    var spans = document.querySelectorAll("#resultado_imc span");
    spans[0].textContent= imc;

    var status = classificarIMC(imc);
    spans[1].textContent = status;


}
// essa função vai classificar o nivel da obesidade
function classificarIMC(imc) {

    if (imc < 18.5) {
        return "abaixo do peso";
    } else if (imc < 25.0) {
        return "peso normal";
    } else if (imc < 30.0) {
        return "sobrepeso";
    } else if (imc <35.0) {
        return "obresidade grau I";
    } else if (imc <40.0) {
        return "obesidade grau II";
    } else {
        return "obesidade grau III";    
    }
}
// essa é a função que vai limpar as caixas
function limpar() {
    document.getElementById("peso").value = ""
    document.getElementById("altura").value = ""

    var spans = document.querySelectorAll("#resultado_imc span");
    spans[0].textContent = "0";
    spans[1].textContent = "0";
}