const getAds = async () => {
  const response = await fetch("http://localhost:3300/html");
  const json = await response.json();
  inputDataAd(json);
};

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

const screenDimensions = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  console.log(`A largura da tela é: ${screenWidth}`);
  console.log(`A altura da tela é: ${screenHeight}`);
};

const observerDiv = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const divObservada = document.querySelector(".upeeads__ad");
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
              if (segundos >= 20) {
                clearInterval(contador);
                if (entry.intersectionRatio >= 1) {
                  console.log(
                    "Div visualizada por 20 segundos. Fazendo a requisição..."
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
};

const inputDataAd = (data) => {
  const AD = document.getElementsByClassName("upeeads__ad");
  AD[0].innerHTML = data.html;

};

/* Requisição que pega o html retornado e adiciona na div especificada */
getAds();
/* Pega as dimensões da tela */
screenDimensions();
/* Observa se o usuário está visualizando uma div especifica de forma completa e se permanecer por 5 segundos, é enviada uma requisição */
observerDiv();
/* Realiza requisições de tempos em tempos */
setInterval(postInterval, 6000);
