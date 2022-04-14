const baseUrl = 'http://localhost:3000/paletas'

async function findAllPaletas(){
    const response = await fetch ('{$baseUrl}/find-paletas');
    const paletas = await response.json();

    paletas.forEach((paleta) => {
        document.getElementById('PaletaList').insertAdjacentHTML(
            "beforeend",
            '
            <div class="PaletaListaItem">
          <div>
            <div class="PaletaListaItem__sabor">${paleta.sabor}</div>
            <div class="PaletaListaItem__preco">${paleta.preco}</div>
            <div class="PaletaListaItem__descricao">${paleta.descricao}</div>
            '
        )

    });
}

findAllPaletas();
