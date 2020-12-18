$(document).ready(function () {
    $("form").submit(function (event) {

        isEmpty("#firstname");
        isEmpty("#lastname");
        isEmpty("#email");

        function isEmpty(field) {
            if ($(field).val().length === 0) {
                $(field).after("<span class='alert'>Merci de remplir ce champ</span>");
                event.preventDefault();
            } else {
                let chaine = $("form").serialize();
            }
        }

    });

});



// Documentation AJAX MDN 
// https://developer.mozilla.org/fr/docs/Web/Guide/AJAX

// Cours openClassrooms sur les expressions régulières
// https://openclassrooms.com/fr/courses/918836-concevez-votre-site-web-avec-php-et-mysql/916990-les-expressions-regulieres-partie-1-2

// Memento expressions régulières openClassrooms
// https://openclassrooms.com/fr/courses/918836-concevez-votre-site-web-avec-php-et-mysql/918834-memento-des-expressions-regulieres



