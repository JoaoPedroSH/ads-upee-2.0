/* Requisições */
const getAds = async () => {
  const response = await fetch("http://localhost:3300/configs");
  const json = await response.json();
  console.log(json);
};
getAds();

const postInterval = async () => {
  const data = { nome: "Testando Post" };
  const response = await fetch("http://localhost:3300/configs", {
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
  const data = { nome: "Testando Post" };
  const response = await fetch("http://localhost:3300/configs", {
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
  const response = await fetch(`http://localhost:3300/configs`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 0,
      nome: "Testando Put",
    }),
  });
  const json = await response.json();
  console.log(json);
};


/* Realiza requisições de tempos em tempos */
setInterval(postInterval, 6000);


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


/* Envia uma requisição quando o usuário clica no botão de voltar, fecha ou recarrega o navegador */
window.addEventListener("beforeunload", function (event) {
  putClosePage();
});
