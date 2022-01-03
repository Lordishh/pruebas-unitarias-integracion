// Funciones en JS
const saludar = function (nombre) {
  return `Hola, soy ${nombre}`;
};

// Arrow Function
const saludar2 = (nombre) => {
  return `Hola, soy ${nombre}`;
};

// Si es una arrow de una sola sentencia, podríamos simplificarlo de la siguiente manera:
const saludar3 = (nombre) => `Hola, soy ${nombre}`;

console.log(saludar("Goku"));
console.log(saludar2("Goku"));
console.log(saludar3("Goku"));

//Paréntesis para objetos en funciones flecha
const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

const user = getUser();
console.log(user);

//Tarea

const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Enuel");
console.log(usuarioActivo);
