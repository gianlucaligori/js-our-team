// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede (se non avete idee prendete spunto dallo screenshot)
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!
// Buon lavoro!
// Questi sono i dati:
// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

let eleList = document.querySelector(".grid");

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: `<img src="assets/img/wayne-barnett-founder-ceo.jpg" alt="">`
    },
    {
        name: 'Angela Caroll', 
        role: 'Chief Editor',
        photo: `<img src="assets/img/angela-caroll-chief-editor.jpg" alt="">`
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: `<img src="assets/img/walter-gordon-office-manager.jpg" alt="">`
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: `<img src="assets/img/angela-lopez-social-media-manager.jpg" alt="">`
    },
    {
        name: 'Scott Estrada', 
        role: 'Developer',
        photo: `<img src="assets/img/scott-estrada-developer.jpg" alt="">`
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: `<img src="assets/img/barbara-ramos-graphic-designer.jpg" alt="">`
    }
];


console.log(team);

for (let element of team) {     
    console.log(element);
    eleList.innerHTML += (`<div class="member">${element.name}, ${element.role}, ${element.photo}</div>`);
}