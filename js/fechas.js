$(function(){

////////////////////////////// RECOGE DATOS DE LOCALSTORAGE PARA DAR UNA SALIDA PERSONALIZADA EN BASE AL CURSO ELEGIDO
    
let datosCursoParseado = [];
datosCursoParseado = JSON.parse(localStorage.getItem('datosCursoMostrar'));
    
$("#cursoElegido").text(datosCursoParseado.curso);
    
////////////////////////////// RECOGE EL TURNO Y FECHA SELECCIONADOS Y LOS GUARDA EN EL LOCALSTORAGE
    
$('.fecha-seleccionada').on('click', function (e) {

    let fecha = {
        'duracion': $(e.currentTarget).find('input[name=duracion]').val(),
        'turno': $(e.currentTarget).find('input[name=turno]').val(),
        'clases': $(e.currentTarget).find('input[name=clases]').val(),
        'dias': $(e.currentTarget).find('input[name=dias]').val(),
        'horarios': $(e.currentTarget).find('input[name=horarios]').val()
        };
    
    localStorage.setItem('fechaYhorario', JSON.stringify(fecha));

    window.location.href = "plan-pago.html";
    e.preventDefault();
});
});