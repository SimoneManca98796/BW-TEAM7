// 1) Aggiungo evento per far illuminare le stelle al click dell'utente su di esse in base al suo feedback !

const changeColor = function () {
  const stars = [i];
  document.getElementsByClassName("fas"); // richiamo l'elemento nell'html
  stars[i].addEventListener("click", function () {
    for (i = 0; i < stars.length; i++) {
      if (stars[i].style.color !== "#01ffff") {
        stars[i].style.color = "#01ffff";
      } else {
        stars[i].style.color = "#090c27";
      }
    }
  });
};

changeColor();

const getTheLink = function () {
  const myButton = document.getElementById("button");
  myButton.addEventListener("mouseover", function () {
    myButton.setAttribute("title", "Visita http://epicode.com"); // mi fa comparire un piccolo titoletto al mouseover sul button!
  });
  myButton.addEventListener("click", function () {
    window.open("http://epicode.com", "_blank"); // il metodo open, con il parametro _blank, apre una NUOVA pagina al click!
    // myButton.setAttribute("href", "https://epicode.com");
  });
};
getTheLink();
