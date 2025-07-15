function cadastrar(){
    const nome = document.getElementById('nome')
    const loja = document.getElementById('loja')
    const cadastrado = document.getElementById('cadastrado')
    const img = document.getElementById('imagem')
    let dados = []

    if(nome.value == 0 || loja.value == 0){
        alert('Campo "NOME" e "LOJA" são obrigatórios!')
    } else{
        img.remove()
        dados.push(nome.value, loja.value)
        const resultado = document.createElement('h2')
        resultado.textContent = 'Vendedor cadastrado com sucesso!'
        cadastrado.appendChild(resultado)
    }
}