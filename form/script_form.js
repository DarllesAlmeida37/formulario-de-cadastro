let dadosNomes = []
let dadosLoja = []
let dadosTelefone = []
let dadosEmail = []

// A função "cadastrar" vai verificar os dados do usuário e salvar os dados em arrays.

function cadastrar(){
    const nome = document.getElementById('nome')
    const tel = document.getElementById('telefone')
    const email = document.getElementById('email')
    const loja = document.getElementById('loja')
    const VendCadastrado = document.getElementById('cadastrado')
    const img = document.getElementById('imagem')

// A função "jaCadastrodo" serva para verificar se o nome do vendedor já está na lista de cadastrados.

    function jaCadastrado(nome, lista){
        return lista.includes(nome.trim())
    }
// A condição "if" vai verificar se todos os campos dos inputs foram preenchidos, e também verifica se o nome do usuário já está cadastrado.

    if(nome.value.trim() === '' || loja.value.trim() === '' || email.value.trim() === '' || tel.value.trim() === "" || jaCadastrado(nome.value, dadosNomes)){
        alert('Dados inválidos ou o Vendedor já foi cadastrado!')
    } else{
// Aqui o sistema vai mostar na tela os dados que o usuário inseriu e vai pedir uma confirmação, antes de salvar os dados.

        const confirmacao = confirm(`Deseja cadastrar o(a) vendedor(a): ${nome.value}\nLoja: ${loja.value}\nTelefone: ${tel.value}\nE-mail: ${email.value}`)

        if (confirmacao){
            alert('Cadastro realizado com sucesso!')     
            if(img){ //fiz uma verifição da imagem para não repetir os dados, nem o título, caso o usuário queira cadastrar mais de uma pessoa.
                img.remove() // Depois do primeiro cadastro, a verificação vai ser (false), então ela nao vai repetir o título.
                const resultado = document.createElement('h2')
                resultado.textContent = `Lista de Vendedores Cadastrados!`
                resultado.style.marginBottom = '30px'
                VendCadastrado.appendChild(resultado)
            }

            dadosNomes.push(nome.value.trim()) // Salvei todos os dados dos inputs em arrays, para exibir na telo para o usuário!
            dadosLoja.push(loja.value.trim())
            dadosTelefone.push(tel.value.trim())
            dadosEmail.push(email.value.trim())
            VendCadastrado.innerHTML += ''
            VendCadastrado.style.border = '2px solid #5590ddbf'
            VendCadastrado.style.padding = '30px'
            VendCadastrado.style.borderRadius = '10px'


            VendCadastrado.innerHTML += `<p><strong>VENDEDOR(A):</strong> ${nome.value}  -  
            <strong>LOJA:</strong> ${loja.value}  -  <strong>Telefone:</strong> ${tel.value}  -  
            <strong>E-mail:</strong> ${email.value}</p>`
                
        }

    }
    
    nome.value = ''
    loja.value = ''
    tel.value = ''
    email.value = ''
    nome.focus()
}
