'use strict';

// Pra per te krijuar nje modal form kemi kater elemente shume te rendesishem
// te cilet jane :

// 1. Butoni qe do bej te mundur krijimin e eventit.
// 2. Butoni qe do bej te mundur mbylljen e modalit.
// 3. Divizioni i modalit qe cfare do te shfaqet.
// 4. Krijimi i nje animacioni vizit blur me overlay.

// Faqja qe eshte krijuar ka nje divizion i cili eshte hidden gjithashtu
// dhe nje overlay effect i cili eshte hidden.

// Me butonin qe do klikojme showModalButton do te realizojme fshirjen e klases
// hidden nga divizioni ku ndodhet modali. E njejta gje do ndodhi dhe me overlay.

// Me butonin closeModal do te behet i mundur aktivizimi i klases hidden ne ate
// divizion por edhe ne sektorin overlay.

//Per te selektuar te gjitha objektet qe i perkasin nje klase te caktuar
//perdorim querySelectorAll dhe jo querySelector qe eshte vetme per nje klase.

// Ky ushtrim eshte per te kuptuar me mire manipulimin e klasave ne Javascript



// Krijimi i variablave qe do manipulojme DOM-in.
const buttonShow = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const buttonCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

//Krijimi i nje funksioni i cili do te hap modalin.

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// Krijimi i nje funksioni i cili do te mbylle modalin.

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//Krijimi i nje loop qe do te bej EventListener per cdo buton.

for (let i = 0; i < buttonShow.length; i++) {
 buttonShow[i].addEventListener('click', openModal)
}

//Krijimi i eventit qe do te mbylle modalin kur te klikohet butoni X dhe kur
// te krijohet ne overlay

buttonCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

// Krijimi i nje eventi te pergjithshem i cili do te marre komanden Esc dhe 
// do te ekzekutoje funksionin e shtimit te klases hidden nepermjet funksionit
// qe krijuam closeModal

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})



