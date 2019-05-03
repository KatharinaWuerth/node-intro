fetch('/users')
  .then(res => res.json())
  .then(data => console.log(data));
//In diesem fetch schaut er, ob der Server funktioniert und welche Daten er zurückgibt;
//für Funktionalität nicht wichtig

const form = document.querySelector('form');

//hier ist der POST Request, den der User an den Server sendet
// headers: Metainformationen, wie im HTML der head
//body: Nutzdaten; eigentliche Inhalt
// fetch ist Anfrage an URL/Netzwerk; kann u.a. auch get oder post Request sein
form.addEventListener('submit', event => {
  event.preventDefault();
  const { name: nameEl, role: roleEl } = event.target;

  fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: nameEl.value, role: roleEl.value })
  })
    .then(res => res.json())
    .then(createdUser => console.log(createdUser))
    .catch(err => console.log(err));
});
