
export class Character {
  constructor(
    public name: string ,
    public status: "Dead" | "Alive",
    public species: string,
    public gender: "Male" | "Female",
    public image: string,
  ) {}
}

export const loadCharacters = async (num: number) => {
  const characters: Array<Character> = [];
  for(let i = 1; i < num; i++){
    const response = await fetch(`https://rickandmortyapi.com/api/character/${i}`);
    const result = await response.json() as any;
    characters.push(new Character(result.name, result.status, result.species, result.gender, result.image));
  }

  return characters;
};