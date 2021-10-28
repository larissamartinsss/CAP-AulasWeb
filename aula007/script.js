function alertaInicio(){
    console.log("Seja bem-vindo");
}
function salvar(){
    console.log('Funcao funcionando');
    let input_nome = document.getElementById('nome');
    console.log(input_nome.value);
    console.log(input_nome.type);
    console.log(input_nome.id);
    let div = document.getElementById('nome-preenchido');
    div.innerHTML = div.innerHTML + "<h1>" + input_nome.value + "</h1>";
    input_nome.value = "";
}

window.onload=function (){
    alertaInicio();
}