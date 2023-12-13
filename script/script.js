document.addEventListener("DOMContentLoaded", function () {
  const dati = {
    datasets: [
      {
        data: [65, 35],
        backgroundColor: ["#00FFFF", "#D20094"],
      },
    ],
  };

  const opzioni = {
    responsive: true,
    cutout: 95,
    elements: {
      arc: { borderWidth: 0, backgroundShadowColor: "black" },
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

  percentualeBlu.innerText = dati.datasets[0].data[0]; // Blu
  percentualeFuxia.innerText = dati.datasets[0].data[1]; // Fuxia
});
