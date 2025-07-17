let dadosNomes = []
let dadosLoja = []
let dadosContato = []


function cadastrar(){
    const nome = document.getElementById('nome')
    const tel = document.getElementById('telefone')
    const email = document.getElementById('email')
    const loja = document.getElementById('loja')
    const VendCadastrado = document.getElementById('cadastrado')
    const img = document.getElementById('imagem')

    function jaCadastrado(nome, lista){
        return lista.includes(nome.trim()) 
    }

    if(nome.value.trim() === '' || loja.value.trim() === '' || email.value.trim() === '' || tel.value.trim() === "" || jaCadastrado(nome.value, dadosNomes)){
        alert('Dados inválidos ou o Vendedor já foi cadastrado!')
    } else{
        if(img){
            img.remove()
            const resultado = document.createElement('h2')
            resultado.textContent = `Lista de Vendedores Cadastrados!`
            resultado.style.marginBottom = '30px'
            VendCadastrado.appendChild(resultado)
        }
        const novoContato = {
            telefone: tel,
            email: email
        }
        dadosContato.push(novoContato) // Salvei os dados de contato (telefone e email) para caso o beck-end precise comparar os dados!
        console.log(dadosContato) // Exibi os dados no console só para ter certeza de que o código funcionou!

        dadosNomes.push(nome.value) // Salvei o nome e loja separados, só para exibir para o usuário na tela!
        dadosLoja.push(loja.value)
        VendCadastrado.innerHTML += ''
        VendCadastrado.style.border = '2px solid rgba(85, 144, 221, 0.75)'
        VendCadastrado.style.padding = '30px'
        VendCadastrado.style.borderRadius = '10px'

        
        VendCadastrado.innerHTML += `<p><strong>VENDEDOR:</strong> ${dadosNomes} - <strong>Loja:</strong> ${dadosLoja}</p>`
    }
    
    nome.value = ''
    loja.value = ''
    tel.value = ''
    email.value = ''
    nome.focus()
}