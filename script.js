class NameIsNullError extends Error {
    constructor() {
        super(`El nombre contiene un valor nulo.`);
        this.name = "NameIsNullError";
    }
}

class InvalidIdError extends Error {
    constructor() {
        super(`El id no es un número.`);
        this.name = "InvalidIdError";
    }
}

class ProfessionNotFoundError extends Error {
    constructor() {
        super(`La profesión está vacía.`);
        this.name = "ProfessionNotFoundError";
    }
}


let BaseDeDatosFalsa = [
    { id: 'a', nombre: "Juan", apellido: "Perez", edad: 66, profecion: "Ing Mecanico" },
    { id: 2, nombre: "Sofía", apellido: "Rodríguez", edad: 22, profecion: "Lic Marketing Digital" },
    { id: 3, nombre: "Mariana", apellido: "García", edad: 33, profecion: "Ing Sistemas Computacionales" },
    { id: 4, nombre: null, apellido: "Martínez", edad: 18, profecion: "Ing Industrial" },
    { id: 5, nombre: "Valentina", apellido: "Gómez", edad: 26, profecion: "Lic Derecho" },
    { id: 6, nombre: "Alejandro", apellido: "Flores", edad: 17 }
];

function validarBaseDeDatos(baseDeDatos) {
    baseDeDatos.forEach(record => {
        try {
            if (!record.hasOwnProperty('id')) {
                throw new PropertyNotFoundError('id');
            }

            if (record.nombre === null) {
                throw new NameIsNullError();
            }

            if (typeof record.id !== 'number') {
                throw new InvalidIdError();
            }

            if (!record.hasOwnProperty('profecion') || record.profecion === '') {
                throw new ProfessionNotFoundError();
            }
        } catch (error) {
            console.error(error); // Mostrar error en la consola del navegador
        }
    });
}

function mostrarBaseDeDatos(baseDeDatos) {
    const output = document.getElementById('output');
    let html = '<table><tr><th>ID</th><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Profesión</th></tr>';
    baseDeDatos.forEach(record => {
        html += `<tr>
                    <td>${record.id}</td>
                    <td>${record.nombre}</td>
                    <td>${record.apellido}</td>
                    <td>${record.edad}</td>
                    <td>${record.profecion ? record.profecion : ''}</td>
                 </tr>`;
    });
    html += '</table>';
    output.innerHTML = html;
}

validarBaseDeDatos(BaseDeDatosFalsa);
mostrarBaseDeDatos(BaseDeDatosFalsa);
