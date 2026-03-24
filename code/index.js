const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/user', (req, res) => {
  const { name, email } = req.body;
  console.log('User Details:', { name, email });
  res.json({ message: `Hello, ${name}! Your email (${email}) was received.` });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
