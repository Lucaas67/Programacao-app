//function imprimir(){
    //document.write('<p>Contador</p>')
//}

//1000 = temppo de execução
//setInterval(imprimir, 1000)

//setInterval(()=> {
//   document.write('<p>Contador</p>')
//}, 1000)


/*
var timer = setInterval(() => {
    contador.innerHTML += 'GLORIOSO<br>'
}, 1000);


function stopTimer() {
    clearInterval(timer)
}


let contador = document.getElementById('contador')
let i = 0;
let timer = setInterval(()=>{
    i++;
    contador.innerHTML += `<p>${i}`;    
},1000)
*/

//var nome = 'SAVA10'

// if (nome === 'SAVA10'){
//     var profissao = 'machucar o Palmeiras'
//     console.log(profissao)
// }

// if (nome === 'SAVA10'){
//     let cargo = 'Machucador de porco'
//     console.log(cargo)
// }

// if (nome === 'SAVA10'){
//     const status = 'Você tambem foi machucado, CHUPA LEILA'
//     status = 'error'
//     console.log(status)
// }

// let pessoa = {
//     nome: 'Tiquinho Soares',
//     idade: '32',
//     cargo: 'Pipoqueiro',
//     posicao: 'Centro-Avante',
//     maiorFeito: 'Pipocar penalti contra o palmeiras',
//     obs: 'Chupa Leila',
//     obs2: 'Chupa Abel',
//     obs3: 'JOHN TEXTOR PAI DE TODOS'
// }

// console.log(pessoa)

// let users = [
//     { nome: 'SAVARINO', idade: 27, cargo: 'Ponta' },
//     { nome: 'TIQUINHO SOARES', idade: 32, cargo: 'Centro-Avante' },
//     { nome: 'LUIZ HENRIQUE', idade: 22, cargo: 'Ponta' }
// ];

// for (var i = 0; i < users.length; i++) {
//     console.log('Nome: ' + users[i].nome);
//     console.log('Idade: ' + users[i].idade);
//     console.log('Posição: ' + users[i].cargo);
// }

// let pessoa = {
//     nome: 'LH',
//     idade: 22,
//     posicao: 'Atacante',
// }

// let {nome, idade} = pessoa

// console.log(nome)

// let numPar = [2,4,6,8,10]
// let numImpar = [...numPar, 1,3,5,7,9] //SPREAD OPERATOR

// console.log(numImpar)

// function user(...nomes){ //USAR OS PONTOS PARA APARECER TODOS OS ITENS
//     console.log(nomes)
// }

// user('LH', 'Savarino', 'Jr santos')

//GERAR NUMEROS ALEATORIOS

// function gerarNumeros(...numeros){ 
//     console.log(numeros);

//     const numerosSorteados = Math.floor(Math.random() * numeros.length)
//     console.log(numeros[numerosSorteados]);
// }

// gerarNumeros(2,4,5,67,43,12,78)

// let nomes = ['savarino', 'LH', 'JR santos']

// nomes.map((item, index) => {
//     console.log('Index: ' + index + ' items: ')
// })

/*
FUNCÃO ANONIMA
() => {}

    PARENTES
    SERTA =>
    CHAVES

let soma = (a,b) => {
let resultado = a + b
console.log(resultado)
}

soma(20,20)
*/

//https://reqres.in/api/users?page=2

let users = {}

function getUsers(){
    fetch('https://reqres.in/api/users?page=2')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        users = data.data
        users.map((user) => {
            let liElement = document.createElement('li')
            let titleElement = document.createComment('strong')
            let imgElement = document.createElement('img')

            let titleText = document.createTextNode(user.first_name + '' + user.last_name)
            titleElement.appendChild(titleElement)

            imgElement.src = user.avatar
            liElement. appendChild(imgElement)

            listElement.appendChild(liElement)
        })
    })
}

getUsers()