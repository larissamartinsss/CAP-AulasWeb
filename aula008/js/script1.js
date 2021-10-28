var pessoas = [];

window.onload = function(){
    console.log('Carregando Js...');

}

function salvar(event){
    event.preventDefault();
    let nome = document.getElementById('nome');
    let sobrenome = document.getElementById('sobrenome');
    let idade = document.getElementById('idade');
    //dicionario - Chave:Valor
    if(idade.value >= 18){
        pessoa = { "nome": nome.value, "sobrenome": sobrenome.value, "idade": idade.value };
        pessoas.push(pessoa);
    }else{
        alert('Sai fora de menor')
    }
    carregaTabela();
}

function carregaTabela(){
    let tbody = document.getElementById("corpo-tabela");
    tbody.innerHTML = "";
    pessoas.forEach(p => {
        tbody.innerHTML += "<tr>"
                        +"<td>"+ p["nome"] +"</td>"
                        +"<td>"+ p["sobrenome"] +"</td>"
                        +"<td>"+ p["idade"] +"</td>"
                       +"</tr>";
    });    
}