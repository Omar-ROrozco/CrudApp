// Variables
const formulario = document.querySelector("#formulario");
const listaNotas = document.querySelector("#listNotas");
let arrayNotas = [];

//funciones
const crearNota = (cabeza, sumario, reportero, textNota) => {
    let nota = {
        cabeza: cabeza,
        sumario: sumario,
        reportero: reportero,
        textNota: textNota

    }
    arrayNotas.push(nota);
    return nota;
}
const guardarBD = () => {
    localStorage.setItem("notas", JSON.stringify(arrayNotas))
    mostrarLista();
}
const mostrarLista = () => {
    listaNotas.innerHTML = "";
    arrayNotas = JSON.parse(localStorage.getItem("notas"));
    if (arrayNotas === null) {
        arrayNotas = [];
    } else {
        arrayNotas.forEach(element => {
            listaNotas.innerHTML += `  <div class="alert alert-secondary mt-5" role="alert">
            <b>${element.cabeza}    </b>
            <p> Reportero <b>${element.reportero}</b> </p>
            <span>
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-alt"></i>
            </span>
        </div>`;

        });

    }
}




//Eventos
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let cabezaU = document.querySelector("#cabeza").value;
    let sumarioU = document.querySelector("#sumario").value;
    let reporteroU = document.querySelector("#reportero").value;
    let textNotaU = document.querySelector("#nota").value;

    crearNota(cabezaU, sumarioU, reporteroU, textNotaU);
    guardarBD();
    formulario.reset();
});
document.addEventListener("DOMContentLoaded", mostrarLista)