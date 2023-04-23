import { Character, loadCharacters } from "./characters.js";

const characters = await loadCharacters(10);

const path = require('path');
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));

app.get('/', (req: any, res: any) => {
    res.render("characters", {
        characters: characters
    })
  })
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})