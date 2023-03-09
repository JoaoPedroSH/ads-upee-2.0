/* Requisições */
const getAds = async () => {
  const response = await fetch("http://localhost:3300/html");
  const json = await response.json();
  console.log(json);

  /* Pega o html retornado na requisição e adiciona na div especificada */
  const htmlDiv = document.getElementById("upeeads__html");
  htmlDiv.innerHTML = json.html;
};
getAds();

const postInterval = async () => {
  const data = { cod: 0 };
  const response = await fetch("http://localhost:3300/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  console.log(json);
};

const postAdsVisualized = async () => {
  const data = { cod: 1 };
  const response = await fetch("http://localhost:3300/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  console.log(json);
};

const putClosePage = async () => {
  const response = await fetch(`http://localhost:3300/test`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 0,
      cod: 2,
    }),
  });
  const json = await response.json();
  console.log(json);
};

/* Realiza requisições de tempos em tempos */
setInterval(postInterval, 6000);

/* Pega as dimensões da tela */
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
console.log(`A largura da tela é: ${screenWidth}`);
console.log(`A altura da tela é: ${screenHeight}`);

/* Observa se o usuário está visualizando uma div especifica de forma completa e se permanecer por 5 segundos, é enviada uma requisição */
document.addEventListener("DOMContentLoaded", () => {
  const divObservada = document.querySelector("#div-observada");
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };
  let visualized = false;
  if (visualized == false) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let segundos = 0;
          const contador = setInterval(() => {
            segundos++;
            if (segundos >= 5) {
              clearInterval(contador);
              if (entry.intersectionRatio >= 0.5) {
                console.log(
                  "Div visualizada por 5 segundos. Fazendo a requisição..."
                );
                postAdsVisualized();
                visualized = true;
              }
            }
          }, 1000);
        }
      });
    }, options);
    observer.observe(divObservada);
  }
});
