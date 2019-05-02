const express = require('express');
const uid = require('uid'); //Libraries muss ich hier nach dem installieren so festhalten

const app = express(); //funktion, die uns eine neue Instanz eines Servers erzeugt
app.use(express.json()); //server vorbereiten, damit er json verstehen kann; schaut im body ob json ankommt und wandelt es um - middleware
let i = 0;

let users = [
  { name: 'Joe', role: 'mechanic', id: uid() },
  { name: 'Dr. Who', role: 'time traveller', id: uid() },
  { name: 'Jan', role: 'assistant coach', id: uid() },
  { name: 'Dalia', role: 'boss', id: uid() }
];

app.get('/', (req, res) => {
  res.send(`Hello world ${i++}`); //wenn wir get request auf den Pfand / bekommen, schicken wir nun die response zurück
});

app.get('/users', (req, res) => {
  res.json(users); //wandelt Objekt in JSON um
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params; //destructuring
  res.json(users.find(user => user.id === id)); // sobald true zurück kommt wird das user Objekt zurück gegeben
});

// wenn post request kommt
app.post('/users', (req, res) => {
  let newUser = req.body; // const user = {...req.body, id: uid()}  --> bräuchte dann nächste Zeile nicht
  newUser.id = uid();
  users = [...users, newUser]; //könnte auch users.push(user) nutzen, müsste dann das Array nicht in let ändern
  res.json(newUser); //schicke gerade erzeugten user als response zurück
});

app.listen(3000, err => {
  err ? console.log(err) : console.log('Server ready');
});
