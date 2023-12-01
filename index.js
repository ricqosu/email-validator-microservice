const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 3005;

app.use(express.json());
app.use(cors());

app.post('/validate-email', (req, res) => {
  const email = req.body.email;

  // Email Pattern
  // Can accept upper & lower case letters, numbers, periods, underscores, dashes
  // Followed by an '@' then domain name, then the TLD (.com, .net, etc)
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Returns true if valid email, false otherwise
  res.json({ isValid: emailRegex.test(email) });
});

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
