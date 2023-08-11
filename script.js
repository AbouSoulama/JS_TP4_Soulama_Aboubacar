// document.getElementById("inscription").addEventListener("submit", function(e) {
    
//     // Regex 
// const nomRegex = /^[a-zA-Z-\s]+$/;
// const prenomRegex = /^[a-zA-Z-\s]+$/;
// const emailRegex = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/;
// const numberRegex = /^\+?[1-9][0-9]{7,14}$/;
// const ageRegex = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;
    
    
//     var erreur;
//     var erreur2;
//     var erreur3;
//     var erreur4;
//     var erreur5;
    
//     var nom = document.getElementById("nom");
//     var prenom = document.getElementById("prenom");
//     var email = document.getElementById("email");
//     var number = document.getElementById("number");
//     var age = document.getElementById("age");
        
    
   
//    if (!age.value) {
//         erreur = "Veuillez renseigner votre age";
//     } else if ( ageRegex.test(age.value) == false) {
//         erreur = "Votre age doit etre composé de jour/mois/année";
//         e.preventDefault()
//     }
   
//    if (!number.value) {
//         erreur = "Veuillez renseigner un numero";
//     } else if ( numberRegex.test(number.value) == false) {
//         erreur = "Votre contact doit contenir uniquement des chiffres";
//         e.preventDefault()
//     }
    
//     if (!email.value) {
//         erreur = "Veuillez renseigner un email";
//     } else if ( emailRegex.test(email.value) == false) {
//         erreur = "Votre email ne doit contenir des lettres, des chiffres et un caratères speciaux";
//         e.preventDefault()
//     }
    
//     if (!prenom.value) {
//         erreur= "Veuillez renseigner un prénom";
//     } else if ( prenomRegex.test(prenom.value) == false) {
//         erreur = "Votre prénom ne doit contenir ni chiffres, ni caratères speciaux";
//         e.preventDefault()
//     }
   
    
    
//     if (!nom.value) {
//         erreur = "Veuillez renseigner un nom";
//     } else if ( nomRegex.test(nom.value) == false) {
//         erreur = "Votre nom ne doit contenir ni chiffres, ni caratères speciaux";
//         e.preventDefault()
//     }
    
//     if (erreur) {
//         e.preventDefault();
//         document.getElementById("erreur").innerHTML = erreur;
//         return false;
//     } else{
//         alert('Formulaire envoyé !');
//     }  
    
    
// });

let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let email = document.getElementById('email');
let number = document.getElementById('number');
let age = document.getElementById('age');
let valid = document.getElementById('valid');
let erreur = document.getElementById('erreur');
let erreur2 = document.getElementById('erreur2');
let erreur3 = document.getElementById('erreur3');
let erreur4 = document.getElementById('erreur4');
let erreur5 = document.getElementById('erreur5');


    // Regex 
    const nomRegex = /^[a-zA-Z-\s]+$/;
    const prenomRegex = /^[a-zA-Z-\s]+$/;
    const emailRegex = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/;
    const numberRegex = /^\+?[1-9][0-9]{7,14}$/;
    const ageRegex = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;
        

valid.addEventListener("click", function (e) {
    if(!nom.value) {
        erreur.innerHTML = '*Veuillez renseigner votre nom';
    } else{erreur.innerHTML = "";}
    
    
   e.preventDefault () 
});



valid.addEventListener("click", function (e) {
    if(!prenom.value) {
        erreur2.innerHTML = '*Veuillez renseigner votre prénom';
    } else{erreur2.innerHTML = "";}
    e.preventDefault ()
});
valid.addEventListener("click", function (e) {
    if(!email.value) {
        erreur3.innerHTML = '*Veuillez renseigner un email';
    } else{erreur3.innerHTML = "";}
    e.preventDefault ()
});
valid.addEventListener("click", function (e) {
    if(!number.value) {
        erreur4.innerHTML = '*Veuillez renseigner un contact';
    } else{erreur4.innerHTML = "";}
    e.preventDefault ()
});
valid.addEventListener("click", function (e) {
    if(!age.value) {
        erreur5.innerHTML = '*Veuillez indiquez votre age';
    } else{erreur5.innerHTML = "";}
    e.preventDefault ()
    
    if (nom.value!="" && prenom.value!=""&& email.value!="" && number.value!="" && age.value!="") {
        alert ("Formulaire envoyé !")
        e.preventDefault ()
    }
});



    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   



        
        
        
        
        
        
