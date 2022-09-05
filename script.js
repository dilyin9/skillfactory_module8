document.body.onload = startpage(); // после загрузки дерева добавляю элементы
// нахожу необходимые элементы в дереве, инициаризирую необходимые
var image_source = document.querySelector('img');
var leftClick = document.querySelector('.left_arrow');
var rightClick = document.querySelector('.right_arrow');
var mainBlock = document.querySelector('.slider_block');
var images_arr = ['/assets/1.jpg', '/assets/2.jpg', '/assets/3.jpg', '/assets/4.jpg', '/assets/5.jpg'];
image_source.src = images_arr[0];
// обработка событий
leftClick.onclick = changeToPrevious;
rightClick.onclick = changeToNext;

function startpage() {
  let block = document.querySelector('.viewpager');
  block.insertAdjacentHTML('afterbegin', '<p>Слайдер картинок</p>');
  let slider = document.createElement('div');
  slider.className = 'slider_block';
  block.insertAdjacentElement('beforeend',slider);
  let image = document.createElement('img');
  let left_arrow = document.createElement('a');
  left_arrow.className ='changer left_arrow';
  left_arrow.innerHTML = '&#10094';
  let right_arrow = document.createElement('a');
  right_arrow.className ='changer right_arrow';
  right_arrow.innerHTML = '&#10095';
  slider.insertAdjacentElement('beforeend', left_arrow);
  slider.insertAdjacentElement('beforeend', right_arrow);
  slider.insertAdjacentElement('beforeend',image);
}
function changeToPrevious() {
  if (!image_source) return ;
  let current_index = images_arr.indexOf(image_source.getAttribute('src'));
  let newIndex = 0;
  if (current_index=== -1 ) return;
  if (current_index === 0) newIndex = images_arr.length - 1;
  else newIndex = current_index - 1;
  image_source.src = images_arr[newIndex];;
  return 1
}

function changeToNext() {
  if (!image_source) return ;
  let current_index = images_arr.indexOf(image_source.getAttribute('src'));
  let newIndex = 0;
  if (current_index=== -1 ) return ;
  if (current_index === images_arr.length - 1) newIndex = 0;
  else newIndex = current_index + 1;
  image_source.src = images_arr[newIndex];
  return 1
}

// реализация с вебинара
// function initSlider() {
//   //тело функции
//   if (images || !images.length) return;
//   let sliderImages = document.querySelector(".slider_images");
//   let sliderArrows = document.querySelector(".slider_arrows");
//   initImages();
//   initArrows();

//   function initImages() {
//     images.forEach((image, index) => {
//       let imageDiv = `<div class= "image n${index} ${index === 0? "active" : ""}" style = "background-image:url(${images[index].url});" data-index="${index}"></div>`;
//       sliderImages.innerHTML += imageDiv;
//     })
//   }
//   function initArrows() {
//     sliderArrows.querySelectorAll(".slider_arrow").forEach(arrow => {
//       arrow.addEventListener("click", function() {
//         let curNumber = +sliderImages.querySelector(".active").dataset.index;
//         let nextNumber;
//         if (arrow.classList.contains("left")) {
//           nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
//         }
//         else {
//             nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
//         }
//         moveSlider(nextNumber);
//       });
//     } ) ;
//   }
//   function moveSlider(num) {
//     sliderImages.querySelector(".active").classList.remove("active");
//     sliderImages.querySelector(".n"+ num).classList.add("active");
//   }
// }
// document.addEventListener("DOMContentLoaded", initSlider);