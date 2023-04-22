import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadUsers } from "./users.js";

const users = await loadUsers();
console.log(users);

//const html = render(users);
//await writeFile('users.html', html);

