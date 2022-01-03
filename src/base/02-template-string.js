const nombre = "Enuel";
const apellido = "Monzón";

//const nombreCompleto = nombre + ' ' + apellido;

// templateString
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return "Hola " + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);
