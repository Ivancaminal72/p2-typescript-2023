import { Character, loadCharacters } from "./characters.js";

const characters = await loadCharacters(50);

const path = require('path');
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));

app.get('/', (req: any, res: any) => {
    res.render("characters", {
        characters: characters
    })
  })
  
app.get('/character', (req: any, res: any) => {
    res.render("character", {
        characters: characters,
        id: req.query.id //Bug with bun version, SOLVED --> https://github.com/oven-sh/bun/issues/2344
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})