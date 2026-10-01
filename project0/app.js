console.log("Скрипт запущен!");
// Массив с данными слайдов
const images = [
  { src: 'photo_1.jpg' },
  { src: 'photo_2.jpg' },
  { src: 'photo_3.jpg' },
  { src: 'photo_4.jpg' },
  { src: 'photo_5.jpg' },
  { src: 'photo_6.jpg' },
  { src: 'photo_7.jpg' },
  { src: 'photo_8.jpg' },
  { src: 'photo_9.jpg' },
  { src: 'photo_10.jpg' },
  { src: 'photo_11.jpg' },
  { src: 'photo_12.jpg' },
  { src: 'photo_13.jpg' },
  { src: 'photo_14.jpg' }
];

// Элементы DOM
const img = document.getElementById('flowers');
const captionEl = document.getElementById('slide-caption');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

let currentIndex = 0; // текущий индекс слайда

// Функция показа слайда по индексу
function showSlide(index) {
  // Зацикливание
  if (index < 0) {
    index = images.length - 1;
  } else if (index >= images.length) {
    index = 0;
  }

  currentIndex = index;
  const item = images[currentIndex];

  // Обновляем картинку
  img.src = 'slides/' + item.src;
  img.alt = item.caption || '';
  img.title = item.caption || '';

  // Обновляем подпись
  captionEl.textContent = item.caption || '';
}

// Обработчики кнопок
btnPrev.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

btnNext.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

// Показываем первый слайд
showSlide(0);

// Автопереключение каждые 3 секунды
setInterval(() => {
  showSlide(currentIndex + 1);
}, 3000);

