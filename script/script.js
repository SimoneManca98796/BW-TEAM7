document.addEventListener("DOMContentLoaded", function () {
  const dati = {
    datasets: [
      {
        data: [25, 75],
        backgroundColor: ["#00FFFF", "#D20094"],
      },
    ],
  };

  const opzioni = {
    responsive: true,
    cutout: 95,
    elements: {
      arc: { borderWidth: 0 },
    },
  };

  const divGrafico = document.getElementById("grafico");
  const ctx = divGrafico.getContext("2d");

  const donutChart = new Chart(ctx, {
    type: "doughnut",
    data: dati,
    options: opzioni,
  });

  // Recupera le percentuali e aggiornale nel DOM
  const percentualeBlu = document.getElementById("percentuale-blu");
  const percentualeFuxia = document.getElementById("percentuale-fuxia");

  const numeroRisposteCorrette = document.getElementById(
    "numero-risposte-corrette"
  );
  const numeroRisposteSbagliate = document.getElementById(
    "numero-risposte-sbagliate"
  );
  const messaggioCentrale = document.getElementById("testo-centrale");

  percentualeBlu.innerText = dati.datasets[0].data[0];
  percentualeFuxia.innerText = dati.datasets[0].data[1];

  const risposteCorrette = 25;
  const risposteSbagliate = 5;
  numeroRisposteCorrette.innerText = `${risposteCorrette}/30 questions`;
  numeroRisposteSbagliate.innerText = `${risposteSbagliate}/30 questions`;

  const percentualeRisposteCorrette = dati.datasets[0].data[0];
  if (percentualeRisposteCorrette > 60) {
    messaggioCentrale.style.display = "block";
  } else {
    messaggioCentrale.style.display = "block";
    messaggioCentrale.innerText =
      "Oh no! You didn't pass the exam... you'll have to work harder and retake it!";
  }
});
