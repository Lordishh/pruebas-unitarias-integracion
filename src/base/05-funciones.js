// Funciones en JS
const saludar = function (nombre) {
  return `Hola, soy ${nombre}`;
};

// Arrow Function
const saludar2 = (nombre) => {
  return `Hola, soy ${nombre}`;
};

const saludar3 = (nombre) => `Hola, soy ${nombre}`;

//Paréntesis para objetos en funciones flecha
export const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

const user = getUser();
console.log(user);

//Tarea

export const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Enuel");
console.log(usuarioActivo);
