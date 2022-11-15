import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

// const list = document.createElement('ul');
// list.classList.add('gallery__list');
// gallery.append(list);

const galleryCards = galleryItems
  .map(
    (card) => `<div class="gallery__item">
<a class="gallery__link" href=${card.original} target="_self">
  <img
    class="gallery__image"
    src=${card.preview}
    data-source=${card.original}
    alt=${card.description}
  />
</a>
</div>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryCards);

gallery.addEventListener("click", getBigImg);

function getBigImg(e) {
  e.preventDefault();
}
console.log(galleryItems);
