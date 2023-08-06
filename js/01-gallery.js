import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

function createMarkupGallery(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
  <li class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
     </a>
  </li>`
    )
    .join("");
}

const galleryMarkup = createMarkupGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();

  if (evt.target === evt.currentTarget) {
    return;
  }
  // console.log(evt.target)

  const currentImage = evt.target.dataset.source;
  if (!currentImage) {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${currentImage}" width="1280">`,

    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },

      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show();

  function onEscKeyPress(evt) {
    // console.log(evt);
    const ESC_KEY_CODE = `Escape`;

    if (evt.code === ESC_KEY_CODE) {
      instance.close();
    }
  }
}
