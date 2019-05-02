const express = require('express');

const app = express(); //funktion, die uns eine neue Instanz eines Servers erzeugt

let i = 0;

app.get('/', (req, res) => {
  res.send(`Hello world ${i++}`); //wenn wir get request auf den Pfand / bekommen, schicken wir nun die response zurück
});

app.listen(3000, err => {
  err ? console.log(err) : console.log('Server ready');
});
