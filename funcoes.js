// Importando os dados do arquivo dados.js
var dados = require('./dados.js')

// Forma mais atual para criar funções
// const nomeFuncao = (parametro) => { codigo }

// Para criar uma API, precisamos pensar nos dados que queremos informar!!

// Informar as UF de todos os estados do Brasil
const siglasEstados = () => {

    // Colocando os dados da variável estadosCidades dentro de um variável local
    const jsonDados = dados.estadosCidades

    // Criando o JSON que iremos retornar
    let siglasJSON

    // Criando o ARRAY que vai armazenar as siglas 
    let siglasARRAY = []
    let capitaisARRAY = []

    // Estrutura para criar forEach (looping para cada item de um array)
    // nomeArray.forEach( (nomeDoObjeto) => { código } )

    jsonDados.estados.forEach((estados) => {

        // Adicionando a sigla de cada estado no array
        siglasARRAY.push(estados.sigla)
        
        // Adicionando a capital de cada estado no array
        capitaisARRAY.push(estados.capital)

    })

    // Adicionando os atributos no JSON
    siglasJSON = {

        // Criando o atributo siglas e adicionando o ARRAY com as siglas nele
        siglas: siglasARRAY,

        // Criando o atributo capital e adiconando o ARRAY com as capitais
        capital: capitaisARRAY,

        // Criando o atributo quantidade e adicionando o tamanho do ARRAY nele
        quantidade: jsonDados.estados.length
    
    }

    // As funções precisam retornar ou um JSON ou false
    return siglasJSON

}

// Informar dados de um estado específico
// Para informar um estado específico, precisamos de um dado para saber qual estado precisaremos informar os dados
// Iremos utilizar as siglas, porém poderia ser um id, o mais utilizado, ou uma informação única, como cpf

const dadosEstado = ( sigla /* parâmetro da função, que precisarão informar ao chama-la */ ) => {

    // Se um texto está minúsculo, ao comparar o mesmo valor, precisamos ter certeza que ele também está minúsculo

    // Armazenando na variável uf o valor que a pessoa vai passar, transformando-o em maiúsculo
    let uf = sigla.toUpperCase()

    // Colocando os dados da variável estadosCidades dentro de um variável local
    const jsonDados = dados.estadosCidades

    // Criando o JSON que iremos retornar
    let estadoJSON

    // Criar uma variável de status, para saber se a função achou um estado com a sigla digitada
    let status = false

    // Para cada item do ARRAY jsonDados.estados, chamaremos os objetos de estado e realizaremos algo
    jsonDados.estados.forEach( (estado) => {

        // Se algum dos estados tiver a sigla igual ao que o usuário digitou, completa o JSON com os dados desse estado
       if( estado.sigla ==  uf ){

            // Montando o JSON com os dados
            estadoJSON = {

                nome: estado.nome,
                sigla: estado.sigla,
                regiao: estado.regiao,
                capital: estado.capital

            }

            // Definindo o status como verdadeiro, ou seja, existe um estado com a sigla digitada
            status = true

       } 

    })

    // Se a função achou um estado com a sigla, retorna o JSON com os dados, senão, retorna false
    if(status){
        return estadoJSON
    }else{
        return false
    }

}




// Mostrando no terminal o que a função retorna
console.log(siglasEstados())
console.log(dadosEstado('rj'))