const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Rota Principal')
})

app.get('/hello', function(req, res){
    res.send('Chegou a resposta')
})

app.get('/nome', function(req, res){
    res.send('Orion Teles de Mesquita')
})

app.get('/lista1/ex1', function(req, res){

    const total = 2000
    const brancos = 100
    const nulos = 200
    const validos = 1700

    const perbrancos = brancos / total * 100

    const pernulos = nulos / total * 100

    const pervalidos = validos / total * 100

    const votoscontados = brancos + nulos + validos;

    const validar = total

    letretono= {}
    if(some> total){
        retorno = {
            codigo :'soma_eleitores',
            mensagem:"erro: a soma dos votos não pode passar o total de eleitores"
        }

    
    } else {
        console.log('Brancos: ' + perbrancos + '%')
        console.log('Nulos: ' + pernulos + '%')
        console.log('Validos: ' + pervalidos + '%')
    }

    res.json({resposta: 'lista 1 --> ex1'})
})

app.listen(3000, function(){
    console.log('Server UP port 3000')
})