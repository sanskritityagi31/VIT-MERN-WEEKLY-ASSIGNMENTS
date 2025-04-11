const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json()); // Middleware to parse JSON

// Route: /welcome
app.get('/welcome', (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// In-memory users array
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

// GET /users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST /users
app.post('/users', (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /users/:id
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const updated = req.body;
  users = users.map(user => user.id == id ? { ...user, ...updated } : user);
  res.json({ message: "User updated" });
});

// DELETE /users/:id
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id != id);
  res.json({ message: "User deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
