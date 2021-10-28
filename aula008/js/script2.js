
window.onload = function(){
    console.log('Carregando Js...');
    let pessoa = []
    localStorage.setItem("pessoa", JSON.stringify(pessoa));
}

function salvar(event){
    event.preventDefault();
    let nome = document.getElementById('nome');
    let sobrenome = document.getElementById('sobrenome');
    let idade = document.getElementById('idade');
    //dicionario - Chave:Valor
    if(idade.value >= 18){
        pessoa = { "nome": nome.value, "sobrenome": sobrenome.value, "idade": idade.value };
        let pessoas = JSON.parse(localStorage.getItem("pessoa"));
        pessoas.push(pessoa);
        localStorage.setItem("pessoa", JSON.stringify(pessoas));
    }else{
        alert('Sai fora de menor')
    }
    carregaTabela();
}

function carregaTabela(){
    let tbody = document.getElementById("corpo-tabela");
    let pessoas = JSON.parse(localStorage.getItem("pessoa"));
    tbody.innerHTML = "";
    pessoas.forEach(p => {
        tbody.innerHTML += "<tr>"
                        +"<td>"+ p["nome"] +"</td>"
                        +"<td>"+ p["sobrenome"] +"</td>"
                        +"<td>"+ p["idade"] +"</td>"
                       +"</tr>";
    });    
}