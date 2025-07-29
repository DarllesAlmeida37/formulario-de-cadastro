let dadosNomes = []
let dadosLoja = []
let dadosTelefone = []
let dadosEmail = []


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
// PRECISO FAZER UMA CONFIRMAÇÃO COM O USUÁRIO, ANTES DE SALVAR O VENDEDOR NO SISTEMA.
    if(nome.value.trim() === '' || loja.value.trim() === '' || email.value.trim() === '' || tel.value.trim() === "" || jaCadastrado(nome.value, dadosNomes)){
        alert('Dados inválidos ou o Vendedor já foi cadastrado!')
    } else{

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

            dadosNomes.push(nome) // Salvei todos os dados em arrays, para exibir para o usuário na tela!
            dadosLoja.push(loja)
            dadosTelefone.push(tel)
            dadosEmail.push(email)
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