
const modalButton = document.querySelectorAll('.button');
const modalWindow = document.querySelector('.overlay');
console.log(modalWindow);
modalButton.forEach((el) => {
  el.addEventListener('click',(e)=>{
    modalWindow.classList.add('overlay--visible');
  })
})


modalWindow.addEventListener('click',(e)=>{
  if(e.target === modalWindow){
    modalWindow.classList.remove('overlay--visible');
  }

});
const checkboxes = document.querySelectorAll('.about-content__input');
const checkboxesLabels = document.querySelectorAll('.check__box');

checkboxesLabels.forEach((label, index) => {
  label.addEventListener('click', () => {
    checkboxesLabels.forEach((item, i) => {
      if (i !== index) {
        item.classList.remove('check__box--active');
      }
    });
    label.classList.add('check__box--active'); // Изменено на добавление класса 'active'
  });
});

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    checkboxesLabels.forEach(item => {
      item.classList.remove('check__box--active');
    });
    const index = Array.from(checkboxes).indexOf(checkbox);
    checkboxesLabels[index].classList.add('check__box--active');
  });
});

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('focus', () => {
    checkboxesLabels.forEach(item => {
      item.classList.remove('check__box--active');
    });
    const index = Array.from(checkboxes).indexOf(checkbox);
    checkboxesLabels[index].classList.add('check__box--active');
  });
});


const swiperItm = document.querySelector('.swiper');

if(swiperItm){
  const swiper = new Swiper(swiperItm, {
    // Optional parameters
    autoplay: true,
    slidesPerView: 3,
    direction: 'vertical',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },

  });


}