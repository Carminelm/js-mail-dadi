//Creiamo la lista di email
var listaMail = ['invito@gmail.com' , 'invito1@gmail.com', 'invito@hotmail.com', 'invito1@hotmail.com'];


// Chiediamo all'utente l'email
var userMail = prompt('inserisci la tua email');


//Creiamo lista di controllo per email

for (var i = 0; i < listaMail.length; i++) {

    //Identidichiamo la lista 
  var lista = listaMail[i];

  //Creiamo cause per la lista 
  if(lista == userMail){
    
    alert('Sei Stato Invitato alla festa ');

  }

  else{
    alert('Non sei stato invitato ');
  }
}
