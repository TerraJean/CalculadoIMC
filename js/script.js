const altura = document.querySelector("#altura")
const peso = document.querySelector("#peso")
const btnCalcular = document.querySelector("#calcular")
const btnLimpar = document.querySelector("#limpar")
const resultado = document.querySelector("#result")
const container = document.querySelector(".container-first")
const containerResult = document.querySelector(".container-result")
const btnVoltar = document.querySelector(".container-result button")



function validacao(text) {
    return text.replace(/[^0-9.]/g, "");
}

[altura,peso].forEach((el)=>{
    el.addEventListener("input", (e)=>{
        const updateValue = validacao(e.target.value);

        e.target.value = updateValue;
    })
})

btnCalcular.addEventListener("click", ()=>{
  
    const alturaIMC = parseFloat(altura.value) * parseFloat(altura.value);
    const pesoIMC = parseFloat(peso.value);
    const imc = (pesoIMC / alturaIMC).toFixed(1);

   
  if (peso.value && altura.value) {        
    
    container.style.display = "none";
    containerResult.style.display = "flex";
    
    if (imc < 18.5) {
        resultado.innerHTML = `seu imc é: ${imc} <br> classificação : Abaixo do peso`  ;        
    } else if( imc > 18.6 && imc < 24.9) {
        resultado.innerHTML = `seu imc é: ${imc} <br> classificação : Peso ideal`  ; 
    }else if( imc > 25 && imc < 29.9) {
        resultado.innerHTML = `seu imc é: ${imc} <br> classificação : levemente acima do peso`  ; 
    }else if( imc > 30 && imc < 34.9) {
        resultado.innerHTML = `seu imc é: ${imc} <br> classificação : Obesidade grau 1`  ; 
    }else if( imc > 35 && imc < 39.9) {
        resultado.innerHTML = `seu imc é: ${imc} <br> classificação : Obesidade grau 2`  ; 
    }else{
        resultado.innerHTML = `cseu imc é: ${imc} <br> classificação : Obesidade grau 3`  ; 
    }    
    }
})

btnLimpar.addEventListener("click", ()=>{
    peso.value = "";
    altura.value = "";
    
})

btnVoltar.addEventListener("click", ()=>{
    container.style.display = "flex";
    containerResult.style.display = "none";
    peso.value = "";
    altura.value = "";
    
})