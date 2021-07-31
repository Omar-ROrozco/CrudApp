//Evento para crear
document.getElementById("formulario").addEventListener("submit", crear);

//funcion Crear
function crear(e) {
    cabeza = document.getElementById("cabeza").value;
    sumario = document.getElementById("sumario").value;
    reportero = document.getElementById("reportero").value;
    nota = document.getElementById("nota").value;
    let notaCompleta = {
        cabeza,
        sumario,
        reportero,
        nota,
    }
    if (localStorage.getItem("Notas") === null) {
        let notas = [];
        notas.push(notaCompleta);
        localStorage.setItem("Notas", JSON.stringify(notas));
    } else {
        let notas = JSON.parse(localStorage.getItem("Notas"));
        notas.push(notaCompleta);
        localStorage.setItem("Notas", JSON.stringify(notas))

    }
    mostrar();
    document.getElementById("formulario").reset();
    e.preventDefault();

}

//function mostrar
function mostrar() {
    let notas = JSON.parse(localStorage.getItem("Notas"));
    document.getElementById("listNotas").innerHTML = ""
    for (let i = 0; i < notas.length; i++) {
        let cabeza = notas[i].cabeza

        let reportero = notas[i].reportero

        document.getElementById("listNotas").innerHTML +=
            `<div class="alert alert-secondary mt-5" role="alert">
                <b>${cabeza}</b>
                <p> ${reportero}</p>
                <div class="btn-group me-2" role="group" aria-label="Second group">
                    <button type="button" onclick="editar(${cabeza})" class="btn "><i class="fas fa-edit " ></i></button>
                    <button type="button" onclick="eliminar()" class="btn "><i class="fas fa-trash-alt btn " ></i></button>

                 </div>


        </div>`
    }


}
mostrar();

//Funcion editar
function editar(cabeza) {

    let notas = JSON.parse(localStorage.getItem("Notas"));
    for (let i = 0; i < notas.length; i++) {
        if (notas[i].cabeza === cabeza) {
            document.getElementById("formulario").innerHTML = `    
            <label> Editar cabeza</label>
            <input type="text" id="newcabeza" class="form-control">
                <p>${notas[i].cabeza}</p>
            <label class="mt-2"> Editar sumario</label>
            <input type="text" id="newsumario" class="form-control mt-2">
            <label class="mt-2">Editar reportero</label>
            <input type="text" id="newreportero" class="form-control mt-2">
            <label class="mt-2"> Editar nota</label>
            <textarea class="form-control" id="newnota"></textarea>
            <button  class="btn btn-success onclick="(${i})" mt-4">Actualizar</button>
            <button  class="btn btn-danger mt-4">Cancelar</button>


            `

        }
    }

}
//Funcion de actualizar
function actualizar(i) {
    let notas = JSON.parse(localStorage.getItem("Notas"));
    notas[i].cabeza = document.getElementById("newcabeza").value;
    notas[i].sumario = document.getElementById("newsumario").value;
    notas[i].reportero = document.getElementById("newreportero").value;
    notas[i].nota = document.getElementById("newnota").value;
    localStorage.setItem("notas", JSON.stringify(notas));

}



























// // Variables
// const formulario = document.querySelector("#formulario");
// const listaNotas = document.querySelector("#listNotas");
// let arrayNotas = [];


// //funciones
// const crearNota = (cabeza, sumario, reportero, textNota) => {
//     let nota = {
//         cabeza: cabeza,
//         sumario: sumario,
//         reportero: reportero,
//         textNota: textNota

//     }
//     arrayNotas.push(nota);
//     return nota;
// }
// const guardarBD = () => {
//     localStorage.setItem("notas", JSON.stringify(arrayNotas))
//     mostrarLista();
// }
// const mostrarLista = () => {
//     listaNotas.innerHTML = "";
//     arrayNotas = JSON.parse(localStorage.getItem("notas"));
//     if (arrayNotas === null) {
//         arrayNotas = [];
//     } else {
//         arrayNotas.forEach(element => {
//             listaNotas.innerHTML += `  <div class="alert alert-secondary mt-5" role="alert">
//             <b>${element.cabeza}    </b>
//             <p> Reportero <b>${element.reportero}</b> </p>
//             <div class="btn-group me-2" role="group" aria-label="Second group">
//             <button type="button" class="btn " ><i class="fas fa-edit " ></i></button>
//             <button type="button" class="btn" ><i class="fas fa-trash-alt"></i></button>
//             </div>


//         </div>`;

//         });

//     }
// }

// const editar = (cabeza) => {
//     let nota = JSON.parse(localStorage.getItem(notas));
//     for(let i=0; i<notas.length;i++){
//         if(notas[i].cabeza===cabeza){
//             document.getElementById("body").innerHTML=`  
//     <form id="formulario">
//                 <label> Cabeza</label>
//                 <input type="text" id="cabeza" class="form-control">${notas[i.cabeza]}
//                 <label class="mt-2"> Sumario</label>
//                 <input type="text" id="sumario" class="form-control mt-2">${notas[i.sumario]}
//                 <label class="mt-2"> Reportero</label>
//                 <input type="text" id="reportero" class="form-control mt-2">${notas[i.reportero]}
//                 <label class="mt-2"> Nota</label>
//                 <textarea class="form-control" id="nota"></textarea>${notas[i.textNota]}
//                 <button type="submit" class="btn btn-success mt-4">Guardar</button>
//             </form>`
//         }


//     }
// }




// //Eventos
// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let cabezaU = document.querySelector("#cabeza").value;
//     let sumarioU = document.querySelector("#sumario").value;
//     let reporteroU = document.querySelector("#reportero").value;
//     let textNotaU = document.querySelector("#nota").value;

//     crearNota(cabezaU, sumarioU, reporteroU, textNotaU);
//     guardarBD();
//     formulario.reset();
// });
// document.addEventListener("DOMContentLoaded", mostrarLista)

// listaNotas.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(e.target);
// })