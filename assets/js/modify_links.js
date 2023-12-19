document.addEventListener('DOMContentLoaded', function() {

    var redirectTo = sessionStorage.getItem('redirectTo');
    
    if (redirectTo) {
        var section = document.getElementById(redirectTo);
        if (section) {
            // Desplaza la vista a la sección correspondiente suavemente
            section.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Limpia la variable para no afectar futuras cargas de la página
        sessionStorage.removeItem('redirectTo');
    }


    var contactButton = document.getElementById('contactButton');
    contactButton.addEventListener('click', function(event) {
        event.preventDefault(); // Previene el cambio en la URL

        //scroll
        var contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    

});