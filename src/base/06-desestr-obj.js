// Desestructuración
// Asignación Desestructurante
const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Iroman",
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usContext = ({ clave, nombre, edad, rango = "Capitán" }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 13.4234234,
      lng: -13.1412,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = usContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
