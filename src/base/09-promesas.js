import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise((res, rej) => {
//   setTimeout(() => {
//     //Tarea
//     const p1 = getHeroeById(2);
//     res(p1);
//     // rej("No se pudo encontrar el héroe");
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("Heroe", heroe);
//   })
//   .catch((err) => console.warn(err));
const getHeroeByIdAsync = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      //Tarea
      const p1 = getHeroeById(id);
      if (p1) {
        res(p1);
      } else {
        rej("No se pudo encontrar el héroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(3).then(console.log).catch(console.warn);
