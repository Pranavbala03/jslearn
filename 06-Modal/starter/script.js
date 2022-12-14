'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('.hidden');
  });
}
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);

modal.addEventListener('click', closeModal);

// document.addEventListener('keydown', function(e){
//     console.log(e);
// });
// if (e.key === Escape){
//     if(!modal.classList.contains('hidden')){
//         console.log('key was pressed')
//         closeModal();
//     }
// }
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
