let valor_cidade = []

function inserir(){ 
let cidade = document.getElementById('cidade').value
valor_cidade.push(cidade)
console.log(valor_cidade)
res.innerHTML = valor_cidade
}
function excluir(){ 
    
    valor_cidade.pop()
    console.log(valor_cidade)
    res.innerHTML = valor_cidade
}

function inserir_inicio(){ 
    let cidade = document.getElementById('cidade').value
    valor_cidade.unshift(cidade)
    console.log(valor_cidade)
    res.innerHTML = valor_cidade
    }
    
function excluir_inicio(){ 
    valor_cidade.shift(cidade)
    console.log(valor_cidade)
    res.innerHTML = valor_cidade
    }