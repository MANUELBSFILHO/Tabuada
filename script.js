// Função para gerar a tabuada com base na escolha do usuário
function gerarTabuada() {
    var tabuadaSelect = document.getElementById("tabuadaSelect");
    var multiplicador = parseInt(tabuadaSelect.value);

    var tabuadaBody = document.getElementById("tabuadaBody");
    tabuadaBody.innerHTML = ""; // Limpar a tabela antes de gerar

    for (var i = 1; i <= 10; i++) {
        var resultado = multiplicador * i;

        // Criar uma nova linha na tabela
        var newRow = tabuadaBody.insertRow();

        // Inserir células com os valores
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);

        cell1.textContent = i;
        cell2.textContent = resultado;
    }
}

// Chamar a função para gerar a tabuada ao carregar a página
gerarTabuada();
