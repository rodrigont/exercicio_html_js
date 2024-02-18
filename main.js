const form = document.getElementById('form-compara')

const valorA = document.getElementById('valorA');
const valorB = document.getElementById('valorB'); 

function comparadnoValor(vA, vB){
    const x = vA.value
    const y = vB.value
    
    if(y > x){
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const mensagemV = `valor <b>${valorB.value}</b> é maior que o valor <b>${valorA.value}</b>. RESULTADO CORRETO`
    const mensagemE = `valor não é valido, valor B precisa ser maior que o valor A`
    const containerMensagemSucesso = document.querySelector('.mensagem');
    let resultado = comparadnoValor(valorA, valorB)

    if(resultado === true){
        containerMensagemSucesso.innerHTML = mensagemV;
        containerMensagemSucesso.style.display = 'block';

        valorA.value = '';
        valorB.value = '';
        
    } else{
        valorB.style.border = '1px solid red';
        containerMensagemSucesso.innerHTML = mensagemE;
        containerMensagemSucesso.style.display = 'block';
        
    }


})


