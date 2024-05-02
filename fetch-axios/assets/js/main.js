document.querySelector(".bnt-cat").addEventListener("click", () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((respons) => respons.json())
    .then((img) => gatinhosfofinhos(img));
});

function hide(e) {
  if (e.target.className === "resultado") {
    e.target.style.visibility = "quadro";
  } else {
    return;
  }
}

document.addEventListener("click", hide, false);

function teste(img) {
  img.map((e) => {
    console.log(e.id);
  });
}

function gatinhosfofinhos(img) {
  img.map((e) => {
    urlimg = e.url;
    tamanho = e.width;

    const quadro = document.createElement("img");
    quadro.src = urlimg;

    quadro.className = "quadro";
    if (tamanho > 500) {
      quadro.width = 500;
    } else {
      quadro.width = tamanho;
    }
    const resultado = document.querySelector(".resultado");
    resultado.appendChild(quadro);
  });
}
