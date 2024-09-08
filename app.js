// Função 'pesquisar', responsável por exibir os resultados da pesquisa na página
function pesquisar() {
    // Obtém o elemento HTML com o ID 'resultados-pesquisa', onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let naoEncontrado = document.getElementById("Nada foi encontrado");

    // Limpa o conteúdo anterior dos elementos de resultados e "nada foi encontrado"
    section.innerHTML = "";
    naoEncontrado.innerHTML = "";

    // Inicializa a variável 'resultados' como uma string vazia, que será preenchida com os itens de pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa == ("")) {
        naoEncontrado.innerHTML = ""; // Limpa o texto de "nada foi encontrado" se o campo estiver vazio
        return; // Encerra a função se não houver texto de pesquisa
    }

    // Converte o texto de pesquisa para minúsculas para comparação
    campoPesquisa = campoPesquisa.toLowerCase();

    // Loop 'for...of' para percorrer cada item dentro da variável 'dados' (presumivelmente um array de objetos)
    for (let dado of dados) {
        // Obtém e transforma as propriedades do dado para minúsculas
        tags = dado.tags.toLowerCase();
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        
        // Verifica se o campo de pesquisa está presente no título, descrição ou tags do dado
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Concatena em 'resultados' uma estrutura HTML para cada item da pesquisa
            resultados += `
            <div class="item-resultado"> 
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a> <!-- Exibe o título do dado com um link -->
                </h2>
                <p>${dado.nascimento}</p> <!-- Exibe a data de nascimento do dado -->
                <p class="descricao-meta">${dado.descricao}</p> <!-- Exibe a descrição do dado -->
                <p>${dado.ator}</p> <!-- Exibe o ator relacionado ao dado -->
                <a href="${dado.link}" class="link-colorido" target="_blank">Mais informações</a> <!-- Exibe um link para mais informações -->
            </div>
            `;
        }
    }

    // Se não houver resultados, exibe uma mensagem indicando que nada foi encontrado
    if (!resultados) {
        naoEncontrado.innerHTML = "<p>Nada foi encontrado</p>";
    }

    // Insere o conteúdo HTML gerado na variável 'resultados' dentro do elemento 'section'
    section.innerHTML = resultados;
}

// Adiciona ouvintes de eventos
document.getElementById("campo-pesquisa").addEventListener("input", pesquisar); // Adiciona evento para quando o valor do campo for alterado
