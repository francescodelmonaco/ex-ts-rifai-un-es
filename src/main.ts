import type { Recipe, Chef } from "./types.ts";

async function getChefBirthday(id: number): Promise<string> {
  const ricettaResponse: Response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const ricetta: Recipe = await ricettaResponse.json();
  const chefResponse: Response = await fetch(`https://dummyjson.com/users/${ricetta.userId}`)
  const chef: Chef = await chefResponse.json();
  return chef.birthDate;
};

// output usando async e await
(async () => {
  try {
    const birthday: string = await getChefBirthday(5);
    console.log(`Lo chef è nato il ${birthday}`)
  } catch (err) {
    console.error(`Errore: ${err}`)
  }
})();