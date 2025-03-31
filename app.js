// Pika-pika suerte!

// NO MODIFICAR (salvo para conseguir el color sangría)

document.querySelector('#first').addEventListener('click', updateBgColor);
document.querySelector('#second').addEventListener('click', updateBgColor);
document.querySelector('#third').addEventListener('click', updateBgColor);

// MODIFICAR A PARTIR DE AQUÍ 
const pikachu = document.querySelector("img");

function updateBgColor(event) {
    pikachu.style.backgroundColor = event.srcElement.dataset.color;
    
}

