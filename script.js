document.getElementById("inscription").addEventListener("submit", function(e) {
    
    
    var erreur;
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var email = document.getElementById("email");
    var number = document.getElementById("number");
    
    if (!nom.value) {
        erreur = "Veuillez renseigner un nom";
    }
    
    if (!prenom.value) {
        erreur = "Veuillez renseigner un prénom";
    }
    
    if (!email.value) {
        erreur = "Veuillez renseigner un email";
    }
    
    if (!number.value) {
        erreur = "Veuillez renseigner un numero";
    }
    
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else{
        alert('Formulaire envoyé !');
    }  
    
    
});