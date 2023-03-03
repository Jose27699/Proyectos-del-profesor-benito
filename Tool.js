

function validarMaterias(event) {
    event.preventDefault(); // evitar que se envíe el formulario

    let semestreSeleccionado = document.querySelector('option[name="semestre"]:checked').value;
    let materiasSeleccionadas = document.querySelectorAll('input[name="materia"]:checked');


    let selectedMaterias = document.querySelector('selected-materias');
    let opcionesSeleccionadas = materiasSeleccionadas.selectedOptions;



    
    // validar si las materias seleccionadas corresponden al semestre seleccionado
    for (let i = 0; i < materiasSeleccionadas.length; i++) { 
        if(materiasSeleccionadas >= 7 ){
            alert('Ya sleccionates las 7 materias');
				return;
			}
        let semestresPermitidos = materiasSeleccionadas[i].dataset.semestre.split(' ');
        alert(`Agregates esta materia ${materiasSeleccionadas[i].value}`);
        if (!semestresPermitidos.includes(semestreSeleccionado)) {
            alert(`La materia ${materiasSeleccionadas[i].value} no está disponible para el semestre seleccionado`);
            materiasSeleccionadas[i].checked = false;

        }
    }
}
