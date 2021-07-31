//Evento para crear
document.getElementById("formulario").addEventListener("submit", crear);

//funcion Crear
function crear(e) {
    let cabeza = document.getElementById("cabeza").value;

    let sumario = document.getElementById("sumario").value;
    let reportero = document.getElementById("reportero").value;
    let nota = document.getElementById("nota").value;
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
    if (notas === null) {
        let notas = [""];
    } else {

        for (let i = 0; i < notas.length; i++) {
            let cabeza = notas[i].cabeza

            let reportero = notas[i].reportero

            document.getElementById("listNotas").innerHTML +=
                `<div class="alert alert-secondary mt-5" role="alert">
                    <b>${cabeza}</b>
                    <p> ${reportero}</p>
                    <div class="btn-group me-2" role="group" aria-label="Second group">
                        <button type="button" onclick="editar('${cabeza}')" class="btn "><i class="fas fa-edit " ></i></button>
                        <button type="button" onclick="eliminar('${cabeza}')" class="btn "><i class="fas fa-trash-alt btn " ></i></button>
    
                     </div>
    
    
            </div>`
        }
    }


}


//Funcion editar
function editar(cabeza) {

    let notas = JSON.parse(localStorage.getItem("Notas"));
    for (let i = 0; i < notas.length; i++) {
        if (notas[i].cabeza === cabeza) {
            document.getElementById("formulario").innerHTML = `    
            <label> Editar cabeza</label>
            <input type="text" id="newcabeza" class="form-control" placeholder="${notas[i].cabeza}">
            <label class="mt-2"> Editar sumario</label>
            <input type="text" id="newsumario" class="form-control mt-2" placeholder="${notas[i].sumario}">>
            <label class="mt-2"> Editar reportero</label>
            <input type="text" id="newreportero" class="form-control mt-2" placeholder="${notas[i].reportero}">>
            <label class="mt-2"> Editar nota</label>
            <textarea class="form-control" id="newnota">${notas[i].nota}</textarea>
            <button  class="btn btn-success  mt-4" onclick="actualizar('${i}')">Actualizar</button>
            <button  class="btn btn-danger mt-4" >Cancelar</button>
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
    localStorage.setItem("Notas", JSON.stringify(notas));

}

//funcion eliminar

function eliminar(cabeza) {
    let notas = JSON.parse(localStorage.getItem("Notas"));
    for (let i = 0; i < notas.length; i++) {
        if (notas[i].cabeza === cabeza) {
            notas.splice(i, 1);
        }
    }
    localStorage.setItem("Notas", JSON.stringify(notas));
    mostrar();
}


mostrar();