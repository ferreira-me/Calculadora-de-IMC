// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {  //adcionou um escutador/evento no formulario
  e.preventDefault(); //não vai deixar esse formulario ser enviado 
  const inputPeso = e.target.querySelector('#peso'); //capturação dados dos inputs 
  const inputAltura = e.target.querySelector('#altura'); //capturação dados dos inputs 

  const peso = Number(inputPeso.value); //conversão dos inputs para NUMBER
  const altura = Number(inputAltura.value); //conversão dos inputs para NUMBER

  if (!peso) {  //se caso for um NaN 
    setResultado('Peso inválido', false); 
    return;
  }

  if (!altura) { //se caso for um NaN 
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura); //cria uma função especifica para calcular o imc
  const nivelImc = getNivelImc(imc); // cria uma função para o nivel de imc 

  const msg = `Seu IMC é ${imc} (${nivelImc}).`; //criou a mensagem 

  setResultado(msg, true); //mandou setar o resultado, agora com a flag true 
});

function getNivelImc (imc) { //criou-se um array para obter os valores 
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5]; //checar de traz pra frente 
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) { //função para o calculo do imc 
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP () {  //função que só cria um paragrafo 
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) {  //função que seta o resultado 
  const resultado = document.querySelector('#resultado'); //seleciona a div de resultados 
  resultado.innerHTML = ''; //0 o html daquele resultado 

  const p = criaP(); //cria um p 

  if (isValid) {  //checamento se essa flag foi enviado como verdadeiro ou falso 
    p.classList.add('paragrafo-resultado'); // se for verdadeira, significa que é valido, a classe que tem o fundo verde 
  } else {
    p.classList.add('bad');// se for falso, significa que não é valido 
  }

  p.innerHTML = msg;  //seta o hinnerHTML do paragrafo, com uma msg que estamos recebendo 
  resultado.appendChild(p); // e adiciona esse paragrado no nosso resultado 
}
