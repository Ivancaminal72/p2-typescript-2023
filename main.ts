import { Character, loadUsers } from "./users.js";

//const users = await loadUsers(100);

const path = require('path');
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.render("characters")
  })
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})