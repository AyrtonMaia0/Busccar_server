//1-Quando eu clicar no botao é para aparecer uma imagem

const { response } = require("express");

var btn = document.querySelector('#button');

//btn.addEventListener('click',mostrar);
var img = document.querySelector('.res');


//GET - MODELO
function porModelo() {
    const res = document.querySelector('.res');
    const imm = document.querySelector('.imm');
    var modelo = document.querySelector('#modelo').value;
    fetch(`dados.json`)
        .then(response => response.json())
        .then(data => {
            let carros = data.carros;
            let encontrados = carros.filter(carro => carro.modelo.toUpperCase() === modelo.toUpperCase());
            if (encontrados.length > 0) {
                res.innerHTML = '';
                imm.innerHTML = '';
                encontrados.forEach(carro => {
                    let carroInfo = `Modelo: ${carro.modelo}<br>
                                    Marca: ${carro.marca}<br>
                                    Ano: ${carro.ano}<br>
                                    Preço: ${carro.preco}<br><br>`;
                    imm.innerHTML += `<img src="${carro.imagens[0]}" style="max-width:100%; border-radius:10%;"> ${carroInfo}`;
                });
            } else {
                console.log('Nenhum carro encontrado');
            }
        })
        .catch(error => console.error(error));
}
//GET - MARCA
function porMarca(){
    const res = document.querySelector('.res');
    const imm = document.querySelector('.imm');
    var marca = document.querySelector('#marca').value.toUpperCase();
    fetch(`dados.json`)
    .then(response => response.json())
    .then(data => {
        let carros = data.carros;
        let encontrados = carros.filter(carros => carros.marca.toUpperCase() === marca);
        if (encontrados.length > 0) {
            res.innerHTML = '';
            imm.innerHTML = '';
            encontrados.forEach(carro => {
                let carroInfo = `Modelo: ${carro.modelo}<br>
                                Marca: ${carro.marca}<br>
                                Ano: ${carro.ano}<br>
                                Preço: ${carro.preco}<br><br>`;
                //res.innerHTML += carroInfo;
                imm.innerHTML += `<img src="${carro.imagens[0]}" style="max-width:100%; border-radius:10%;"> ${carroInfo}`;
            });
        } else {
            console.log('Nenhum carro encontrado');
        }
    })
    .catch(error => console.error(error));
}
//GET - ANO
function porAno() {
    const res = document.querySelector('.res');
    const imm = document.querySelector('.imm');
    var ano = document.querySelector('#ano').value;
    ano = parseInt(ano);
    fetch(`dados.json`)
    .then(response => response.json())
    .then(data => {
        let carros = data.carros;
        let encontrados = carros.filter(carros => carros.ano === ano);
        if (encontrados.length > 0) {
            res.innerHTML = '';
            imm.innerHTML = '';
            encontrados.forEach(carro => {
                let carroInfo = `Modelo: ${carro.modelo}<br>
                                Marca: ${carro.marca}<br>
                                Ano: ${carro.ano}<br>
                                Preço: ${carro.preco}<br><br>`;
                imm.innerHTML += `<img src="${carro.imagens[0]}" style="max-width:100%; border-radius:10%;"> ${carroInfo}`;
            });
        } else {
            console.log('Nenhum carro encontrado');
        }
    })
    .catch(error => console.error(error));
}
//GET - TUDO
function tudo(){
    const res = document.querySelector('.res');
    const imm = document.querySelector('.imm');
    var modelo = document.querySelector('#modelo').value.toUpperCase();
    var marca = document.querySelector('#marca').value.toUpperCase();
    var ano = document.querySelector('#ano').value;
    ano = parseInt(ano);
    fetch(`dados.json`)
        .then(response => response.json())
        .then(data => {
            let carros = data.carros;
            let encontrados = carros.filter(carros => modelo == '' || marca == '' || ano == '');
            for (let i = 0; i < carros.length; i++) {
                let carro = carros[i];
                res.innerHTML = '';
                imm.innerHTML = '';
                encontrados.forEach(carro => {
                    let carroInfo = `Modelo: ${carro.modelo}<br>
                                    Marca: ${carro.marca}<br>
                                    Ano: ${carro.ano}<br>
                                    Preço: ${carro.preco}<br><br>`;
                    imm.innerHTML += `<img src="${carro.imagens[0]}" style="max-width:100%; border-radius:10%;"> ${carroInfo}`;
                });
            }
        })
    .catch(error => console.error(error));
}


//----------
function criar(){}