const checkbox = document.getElementById('checkBox');
const next = document.getElementById('proceed');
// utilizzo un metodo che reagirá al click del tasto PROCEED in funzione di IF//
next.addEventListener('click', function() {
  // attraverso IF, verifico se la checkbox é stata cliccata o meno //
    if (!checkbox.checked) {
      alert('Please agree to the terms and conditions, thank you!');
    }
  });