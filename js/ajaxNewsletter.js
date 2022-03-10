$(function () {
    
/////////////////// NEWSLETTER
    
      const agregarDatos = () => {
    
        const URLPOST = "https://jsonplaceholder.typicode.com/posts"
    
        const email = $("#email").val();
    
        const correoNewsletter = { 'correo': email };
    
        $('#email').val('');
    
        $.post(URLPOST, correoNewsletter).done(function (data, estado) {
          console.log("estado que retorna el json placeholder " + estado);
          console.log(data);
          if (correoNewsletter.correo) {
            swal({
              title: "Felicitaciones!",
              text: "Te has suscrito al Newsletter de Casa de Programacion",
              icon: "success",
              button: "Genial!",
            });
        
          } else {
            swal({
              title: "Error en el envio del Email",
              text: "Siga participando campeon",
              icon: "error",
              button: ":(",
            });
       
          }
        });
      };
    
      $('#btn-newsletter').click(function () {
        agregarDatos();
      });
    });