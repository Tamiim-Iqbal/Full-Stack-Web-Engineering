import express from 'express';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5001;  // windows: 5000, mac: 5001 

app.use(cors());  
app.use(express.json());  // Middleware to parse JSON request bodies  


app.get('/', (req, res) => {
  res.send('Hello World from Express.js!');
});

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 4, name: 'Bob Williams', email: 'bob@example.com' },
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
    console.log('Data from the client:', req.body);
    const newUser = req.body;
    // Temporary data storage (Future: Use a database for persistent storage)
    newUser.id = users.length + 1; // Assign a new ID to the user
    users.push(newUser);
    res.send({success: true, message: 'User created successfully!'});
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.get('/contact', (req, res) => {
  res.send('This is the contact page.');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});