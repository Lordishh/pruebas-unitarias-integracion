import heroes from "../data/heroes";

// const getHeroeById = (id) => {
//   return heroes.find((heroe) => {
//     if (heroe.id === id) {heroes
//       return true;
//     } else {
//       return false;
//     }
//   });
// };

// console.log(owners);

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroeById(3));

// find? filter
export const getHeroeByOwner = (owner) =>
  heroes.filter((el) => el.owner === owner);

// console.log(getHeroeByOwner("DC"));
