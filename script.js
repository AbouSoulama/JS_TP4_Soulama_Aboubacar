document.getElementById("inscription").addEventListener("submit", function(e) {
    
    // Regex 
const nomRegex = /^[a-zA-Z-\s]+$/;
const prenomRegex = /^[a-zA-Z-\s]+$/;
const emailRegex = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/;
const numberRegex = /^\+?[1-9][0-9]{7,14}$/;
const ageRegex = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;
    
    
    var erreur;
    
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var email = document.getElementById("email");
    var number = document.getElementById("number");
    var age = document.getElementById("age");
    
   if (!age.value) {
        erreur = "Veuillez renseigner votre age";
    } else if ( ageRegex.test(age.value) == false) {
        erreur = "Votre age doit etre composé de jour/mois/année";
        e.preventDefault()
    }
   
   if (!number.value) {
        erreur = "Veuillez renseigner un numero";
    } else if ( numberRegex.test(number.value) == false) {
        erreur = "Votre contact doit contenir uniquement des chiffres";
        e.preventDefault()
    }
    
    if (!email.value) {
        erreur = "Veuillez renseigner un email";
    } else if ( emailRegex.test(email.value) == false) {
        erreur = "Votre email ne doit contenir des lettres, des chiffres et un caratères speciaux";
        e.preventDefault()
    }
    
    if (!prenom.value) {
        erreur = "Veuillez renseigner un prénom";
    } else if ( prenomRegex.test(prenom.value) == false) {
        erreur = "Votre prénom ne doit contenir ni chiffres, ni caratères speciaux";
        e.preventDefault()
    }
   
    
    
    if (!nom.value) {
        erreur = "Veuillez renseigner un nom";
    } else if ( nomRegex.test(nom.value) == false) {
        erreur = "Votre nom ne doit contenir ni chiffres, ni caratères speciaux";
        e.preventDefault()
    }
    
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else{
        alert('Formulaire envoyé !');
    }  
    
    
});


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // var inputs =document.getElementsByTagName("input");
    
    // for (var i = 0; i < inputs.length; i++) {
    //     if (!inputs[i].value) {
    //         erreur = "Veuillez renseigner tous les champs";
    //     }
    // }
    
    // if (erreur) {
    //      e.preventDefault();
    //     document.getElementById("erreur").innerHTML = erreur;
    //         return false;
    //      } else {
    //        alert('Formulaire envoyé !');
    //      }
    //     }) 



        
        
        
        
        
        
