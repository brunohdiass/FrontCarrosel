let fotos = [];
let indiceAtual = 0;

function mostrarFoto() {
  const foto = fotos[indiceAtual];
  document.getElementById("foto").src = foto.imagem;
  document.getElementById("descricao").textContent = foto.descricao;
  document.getElementById("data").textContent = foto.data;
}

function avancar() {
  if (indiceAtual < fotos.length - 1) {
    indiceAtual++;
    mostrarFoto();
  }
}

function voltar() {
  if (indiceAtual > 0) {
    indiceAtual--;
    mostrarFoto();
  }
}

fetch("http://localhost:3000/fotos")
  .then(res => res.json())
  .then(data => {
    fotos = data;
    mostrarFoto();
  })
  .catch(error => {
    document.getElementById("descricao").textContent = "Erro ao carregar imagens.";
    console.error("Erro na API:", error);
  });
