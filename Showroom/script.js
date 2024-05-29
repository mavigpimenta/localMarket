// Declaração da variável produtos fora do escopo do evento para torná-la global
let produtos;

document.addEventListener("DOMContentLoaded", function () {
  fetch("../Showroom/produtos.json")
    .then((response) => response.json())
    .then((data) => {
      produtos = data;
      const produtosContainer =
        document.getElementById("produtos-container");

      produtos.map((produto, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.width = "18rem";
        card.style.marginRight = "10px";

        const imagem = document.createElement("img");
        imagem.src = produto.imagem;
        imagem.className = "card-img-top";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardStatus = document.createElement("div");
        cardStatus.className = "card-status";
        cardStatus.style.width = "10px";
        cardStatus.style.height = "10px";
        cardStatus.style.borderRadius = "100%";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.textContent = produto.nome;

        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.textContent = "Preço: $" + produto.preco.toFixed(2) + " | Quantidade: " + produto.quantidade;

        if (produto.status == false) {
            cardStatus.style.backgroundColor = "red";
            
        } else {
            cardStatus.style.backgroundColor = "green";
        }

        cardBody.appendChild(cardStatus);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);

        card.appendChild(imagem);
        card.appendChild(cardBody);

        produtosContainer.appendChild(card);
      });
    })
    .catch((error) => console.error("Erro ao carregar o arquivo JSON", error));
});