import express from "express"

const app = express();
import dotenv from "dotenv"
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  console.log('aeee ' +  JSON.stringify(req.body))
  next()
})

app.post('/hello', function (req, res) {
  console.log(JSON.stringify(req.body.hiee) + ' yoooooo');
  res.send('hello : ' + JSON.stringify(req.body));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});