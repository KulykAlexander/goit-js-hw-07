import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryCards = galleryItems
  .map(
    (card) => `<div class="gallery__item">
<a class="gallery__link" href="${card.original}" target="_self">
  <img
    class="gallery__image"
    src="${card.preview}"
    data-source="${card.original}"
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

  if (e.target.nodeName !== "IMG") {
    return;
  }
  const imgUrlOriganal = e.target.dataset.source;
  console.log(imgUrlOriganal);

  const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${imgUrlOriganal}" width="800" height="600">
    <a>Close</a>
    </div>
`);

  instance.show();
}
console.log(galleryItems);
