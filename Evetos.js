const estudiantes = [
    {
        "matricula": "1987398",
        "nombre": "Edgar",
        "apellidoPaterno": "Santiago",
        "apellidoMaterno": "Santiago"
    },
    {
        "matricula": "2019876",
        "nombre": "Juan",
        "apellidoPaterno": "Perez",
        "apellidoMaterno": "Lopez"
    },
    {
        "matricula": "2054321",
        "nombre": "Ana",
        "apellidoPaterno": "Gomez",
        "apellidoMaterno": "Martinez"
    },
    {
        "matricula": "2037890",
        "nombre": "Luis",
        "apellidoPaterno": "Martinez",
        "apellidoMaterno": "Hernandez"
    },
    {
        "matricula": "2061234",
        "nombre": "Maria",
        "apellidoPaterno": "Rodriguez",
        "apellidoMaterno": "Gonzalez"
    },
    {
        "matricula": "2045678",
        "nombre": "Carlos",
        "apellidoPaterno": "Sanchez",
        "apellidoMaterno": "Diaz"
    },
    {
        "matricula": "2079012",
        "nombre": "Sofia",
        "apellidoPaterno": "Lopez",
        "apellidoMaterno": "Castillo"
    },
    {
        "matricula": "2083456",
        "nombre": "Miguel",
        "apellidoPaterno": "Torres",
        "apellidoMaterno": "Vargas"
    },
    {
        "matricula": "2096789",
        "nombre": "Laura",
        "apellidoPaterno": "Ramirez",
        "apellidoMaterno": "Silva"
    },
    {
        "matricula": "2001234",
        "nombre": "Diego",
        "apellidoPaterno": "Flores",
        "apellidoMaterno": "Mendoza"
    }
];

const Contenedor = document.getElementById("contenedor");
const inputBuscar = document.getElementById("txtBuscar");

function mostrarEstudiantes(lista) {
    if (lista.length === 0) {
        Contenedor.innerHTML = "<p>No se encontraron resultados</p>";
        return;
    }
    
    let ElementosLista = "<ul>";
    
    lista.forEach(function(estudiante) {
        ElementosLista += `
            <li>
                <strong>${estudiante.matricula}</strong> - 
                ${estudiante.nombre} ${estudiante.apellidoPaterno} ${estudiante.apellidoMaterno}
            </li>
        `;
    });
    
    ElementosLista += "</ul>";
    Contenedor.innerHTML = ElementosLista;
}

mostrarEstudiantes(estudiantes);

inputBuscar.addEventListener("input", function() {
    const textoBusqueda = this.value.toLowerCase();
    
    if (textoBusqueda === "") {

        mostrarEstudiantes(estudiantes);
    } else {

        const estudiantesFiltrados = estudiantes.filter(function(estudiante) {
            const nombreCompleto = `${estudiante.nombre} ${estudiante.apellidoPaterno} ${estudiante.apellidoMaterno}`.toLowerCase();
            const matricula = estudiante.matricula.toLowerCase();
            
            return nombreCompleto.includes(textoBusqueda) || matricula.includes(textoBusqueda);
        });
        
        mostrarEstudiantes(estudiantesFiltrados);
    }
});