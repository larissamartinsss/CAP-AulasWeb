function alertaInicio(){
    alert("Seja bem-vindo");
}
window.onload=function(){ /*funcão anonima*/
    alertaInicio();
} 

function salvar(){
    console.log('Função funcionando');
    let input_nome = document.getElementById('nome');
    console.log(input_nome.value);
    console.log(input_nome.id);

    let h2 = document.getElementById('nome-preenchido');
    h2.innerHTML = input_nome.value;
}