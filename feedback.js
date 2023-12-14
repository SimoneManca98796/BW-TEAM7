// 1) Aggiungo evento per far illuminare le stelle al click dell'utente su di esse in base al suo feedback !

const stars = document.querySelectorAll(".star i");

stars.forEach((star, index) => {
  star.addEventListener("click", function () {
    // Illumina la stella cliccata e quelle precedenti
    for (let i = 0; i <= index; i++) {
      stars[i].style.color = "#01ffff";
    }
    // Riporta tutte le stelle successive al colore di default
    for (let i = index + 1; i < stars.length; i++) {
      stars[i].style.color = "#090c27";
    }
  });
});

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
