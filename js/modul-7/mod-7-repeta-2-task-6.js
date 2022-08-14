// посилання на статтю стосовно кросбраузненого рішеня нижче
// https://web.dev/browser-level-image-lazy-loading/

// 'loading' in HTMLImageElement.prototype - ця частина наз feature detection
if ('loading' in HTMLImageElement.prototype) {
  console.log('Браузер підтримує lazy-loading');
  addSrcAttrToLazyImages();
} else {
  console.log('Браузер НЕ підтримує lazy-loading: Safari');
  addLazySizesScript();
}

const lazyImages = document.querySelectorAll('img[data-src]');

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(e) {
  console.log('Картинка загрузилась');
  e.target.classList.add('appear');
}

function addSrcAttrToLazyImages() {
  const lazyiImages = document.querySelectorAll('img[loading="lazy"]');
  lazyiImages.forEach(img => {
    img.src = img.dataset.src;
  });
}

function addLazySizesScript() {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
  script.integrity =
    'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
  script.crossorigin = 'anonymous';
  script.referrerpolicy = 'no-referrer';

  document.body.appendChild(script);
}
