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
        <img class="gallery__image" src="${preview}" alt="${description}"/>
     </a>
  </li>`
    )
    .join("");
}

const galleryMarkup = createMarkupGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
// galleryContainer.addEventListener('click', onImageClick)

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

// console.log(lightbox);
