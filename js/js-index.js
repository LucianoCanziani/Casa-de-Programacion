$(function() {



    ////////////////// EVENTOS QUE LLEVAN AL USUARIO A SECCIONES DE LA LANDING PAGE

    $(".cursoNav").click(function() {

        $('html,body').animate({
            scrollTop: $('#cursos').offset().top
        }, 300);

    });

    $(".estudiantesNav").click(function() {

        $('html,body').animate({
            scrollTop: $('.students').offset().top
        }, 300);

    });

    ////////////////// SLICK SLIDER PROFESORES

    $('.expertosIndustria').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        variableWidth: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
    });


    ////////////////// ELECCION DEL CURSO POR EVENTO, GUARDA EN LOCALSTORAGE Y PROCEDE A LA SIGUIENTE PAGINA

    $('.info-curso').on('click', function(e) {

        let curso = {
            'precio': $(e.currentTarget).find('input[name=precio]').val(),
            'curso': $(e.currentTarget).find('input[name=cursoNombre]').val()
        };

        localStorage.setItem('datosCurso', JSON.stringify(curso));

        localStorage.setItem('datosCursoMostrar', JSON.stringify(curso));

        window.location.href = "carrito/fechas.html";

        e.preventDefault()
    });

    ////////////////// SLICK SLIDER ESTUDIANTES

    $('.testimonios').slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1000,
    });

    ////////////////// PREGUNTAS FRECUENTES 

    $(".pregunta").on('click', function(e) {

        $(e.currentTarget).children('.respuesta').show();


    });
/*
    $(".pregunta").on('click', function(e) {

        $(e.currentTarget).children('.respuesta').show();

        /////// ORIENTACION DE LA FLECHA DE PREGUNTAS FRECUENTES

        let isOpening = !$(this).hasClass('luccan-opened');

        $(this).find('.titulo-arrow .arrow').css('transform', isOpening ? 'rotate(180deg)' : 'none');
        if (isOpening) $(this).addClass('luccan-opened');
        else $(this).removeClass('luccan-opened');

    });*/
});