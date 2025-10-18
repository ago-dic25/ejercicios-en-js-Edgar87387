const arreglo = 
[
  "Edgar Aurelio",
  "Juan Perez", 
  "Ana Gomez", 
  "Luis Martinez",
  "Maria Rodriguez",
  "Carlos Sanchez",
  "Sofia Lopez",
  "Miguel Torres",
  "Laura Ramirez",
  "Diego Flores"];

const Contenedor = document.getElementById("contenedor");
const inputBuscar = document.getElementById("txtBuscar");

let ElementosLista = "<ul>";

/*arreglo.forEach(function(item) {
    ElementosLista += `<li>${item}</li>`;
});

ElementosLista += "</ul>";

Contenedor.innerHTML = ElementosLista;
*/

function MostrarLista(lista) {
    let ElementosLista = "<ul>";

    lista.forEach(function(item) {
        ElementosLista += `<li>${item}</li>`;
    });

    ElementosLista += "</ul>";
    Contenedor.innerHTML = ElementosLista;
}

MostrarLista(arreglo);

inputBuscar.addEventListener("input", function() {
    const textoBusqueda = this.value.toLowerCase();
    if(textoBusqueda === "") {
        MostrarLista(arreglo);
    } else {
        const NombresFiltrados = arreglo.filter(function(nombre) {
            return nombre.toLowerCase().includes(textoBusqueda);
        });
        MostrarLista(NombresFiltrados);
    }
});