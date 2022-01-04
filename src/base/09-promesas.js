import { getHeroeById } from "./08-imp-exp";

export const getHeroeByIdAsync = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      //Tarea
      const p1 = getHeroeById(id);
      if (p1) {
        res(p1);
      } else {
        rej("No se pudo encontrar el héroe");
      }
    }, 1500);
  });
};
