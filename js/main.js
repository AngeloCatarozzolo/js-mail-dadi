//creo una lista di email 
const mail = ['utente1@gmail.com','utente2@gmail.com','utente3@gmail.com','utente4@gmail.com'];
//prompt dove chiedo all' utente di inserire la propria email
const userMail = prompt('inserisci la tua e-mail :D');
let htmlElement = document.getElementById('output');
htmlElement.innerHTML=`email: ${userMail}`;
flag = false;
//creo un for  dove l' indice scorrerà tutta la lista
//se l'email corrisponde , allora il valore del flag diventerà vero.
for(let i=0 ; i < mail.length ; i++){
    if(userMail.toLowerCase() === mail[i].toLowerCase()){
        flag = true;
    }
}
//if se il valore del flag è vero , stampare "Benvenuto"
//altrimenti stampare "Attenzione! email non corretta"
if(flag){
    console.log('Benvenuto');
    htmlElement.innerHTML+='<div>Benvenuto</div>';
}else{
    console.log('Attenzione! email non corretta')
    htmlElement.innerHTML+='<div>Attenzione! email non corretta</div>';
}
//-----------------------------------------------------------
//creo l'array dado contenente 6 numeri
const dado = ['1','2','3','4','5','6'];
let htmlElement2 = document.querySelector('.dadi');
//creo due variabili random e uso la funzione math
//es. const randomElement = array[Math.floor(Math.random() * array.length)];
const utente = dado[Math.floor(Math.random() * dado.length)];
console.log(utente);
htmlElement2.innerHTML=`<div>utente: ${utente}</div>`;
const computer = dado[Math.floor(Math.random() * dado.length)];
console.log(computer);
htmlElement2.innerHTML+=`<div>computer: ${computer}</div>`;
//eseguo un controllo ovvero se(if) elemento random generato dall' utente > elemento random generato dal computer
//stampare che vince utente , altrimenti se è < vince il computer , in caso di due numeri uguali , stampa un pareggio.
if(utente > computer){
    console.log('Hai vinto!');
    htmlElement2.innerHTML+=`<div>Hai Vinto :D</div>`;
}else if(utente < computer){
    console.log('oh noo il computer ha vinto');
    htmlElement2.innerHTML+=`<div>oh noo il computer ha vinto!</div>`;
}else{
    console.log('incredibile pareggio');
    htmlElement2.innerHTML+=`<div>incredibile pareggio</div>`;
}