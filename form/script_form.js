function cadastrar(){
    const nome = document.getElementById('nome')
    const loja = document.getElementById('loja')
    const VendCadastrado = document.getElementById('cadastrado')
    const img = document.getElementById('imagem')
    let dadosNomes = []
    let dadosLoja = []

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
        VendCadastrado.style.border = '2px solid rgb(28, 85, 158)'
        VendCadastrado.style.padding = '30px'
        VendCadastrado.style.borderRadius = '10px'
        dadosNomes.push(nome.value)
        dadosLoja.push(loja.value)
        
        VendCadastrado.innerHTML += `<p>VENDEDOR: ${dadosNomes} - Loja: ${dadosLoja}</p>`
    }
    
    nome.value = ''
    nome.focus()
    loja.value = ''
}