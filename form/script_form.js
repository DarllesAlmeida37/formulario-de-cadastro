function cadastrar(){
    const nome = document.getElementById('nome')
    const tel = document.getElementById('telefone')
    const email = document.getElementById('email')
    const loja = document.getElementById('loja')
    const VendCadastrado = document.getElementById('cadastrado')
    const img = document.getElementById('imagem')
    let dadosNomes = []
    let dadosLoja = []
    let dasdosContado = []


    if(nome.value == 0 || loja.value == 0){
        alert('Campo "NOME" e "LOJA" são obrigatórios!')
    } else{
        if(img){
            img.remove()
            const resultado = document.createElement('h2')
            resultado.textContent = `Lista de Vendedores Cadastrados!`
            resultado.style.marginBottom = '30px'
            VendCadastrado.appendChild(resultado)
        }
        VendCadastrado.innerHTML += ''
        VendCadastrado.style.border = '2px solid rgba(85, 144, 221, 0.75)'
        VendCadastrado.style.padding = '30px'
        VendCadastrado.style.borderRadius = '10px'
        dadosNomes.push(nome.value)
        dadosLoja.push(loja.value)
        
        VendCadastrado.innerHTML += `<p><strong>VENDEDOR:</strong> ${dadosNomes} - <strong>Loja:</strong> ${dadosLoja}</p>`
    }
    
    nome.value = ''
    nome.focus()
    loja.value = ''
    tel.value = ''
    email.value = ''
}