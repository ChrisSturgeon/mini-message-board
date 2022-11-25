var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Chris',
    added: new Date(),
  },
  {
    text: 'Hello, world!',
    user: 'Tanya',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.post('/new', (req, res) => {
  const inputs = req.body;
  messages.push({
    text: inputs.messageText,
    user: inputs.nameText,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
