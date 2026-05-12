const express = require('express');
const app = express();

 
app.get('/', (req, res) => {
  res.send("Home page");
});  
app.get('/about', (req, res) => {
  res.send("This is the about page");
});
app.get('/contact', (req, res) => {
  res.send("This is the contact page");
});
app.get('/services', (req, res) => {
  res.send("This is the services page");
});
app.get('/products', (req, res) => {
  res.send("This is the products page");
}); 
app.get('/blog', (req, res) => {
  res.send("This is the blog page");
});

app.listen(3000, () => {
  console.log('Server is running');
});
