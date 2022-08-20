const express = require('express');
const app = express();
const port = 3000;

const users = [
  { id: 1, name: 'Gary', age: 15 },
  { id: 2, name: 'Mango', age: 30 },
  { id: 3, name: 'Lusy', age: 25 },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send(
    '<h3>About</h3><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil mollitia repudiandae possimus, tenetur maxime ratione dignissimos laborum facilis autem minus repellat vero impedit. Quis, doloremque culpa! Repellat, praesentium. Iste, laudantium.</p>'
  );
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
