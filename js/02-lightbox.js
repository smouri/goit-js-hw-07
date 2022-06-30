import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
    .map(
        ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>`
    )
    .join("");

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

gallery.addEventListener("click", galleryHandler);

function galleryHandler(event) {
    event.preventDefault();
    console.dir(event);
    if (event.target.nodeName === "IMG") {
        const lightbox = new SimpleLightbox(".gallery a", {
            overlayOpacity: 0.8,
            captionsData: "alt",
            captionDelay: 250,
        });
    }
    gallery.removeEventListener("click", galleryHandler);
}