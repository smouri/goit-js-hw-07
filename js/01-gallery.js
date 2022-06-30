import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
    .map(
        ({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
            </a>
        </div>`
    )
    .join("");

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

gallery.addEventListener("click", galleryHandler);

function galleryHandler(event) {
    event.preventDefault();
    console.dir(event);
    if (event.target.nodeName === "IMG") {
        const originalImg = event.target.dataset.source;
        const instance = basicLightbox.create(
            `
    <img src="${originalImg}">
`, {
                onShow: (instance) => {
                    window.addEventListener("keydown", closeModal);
                },
                onClose: (instance) => {
                    window.removeEventListener("keydown", closeModal);
                },
            }
        );

        instance.show();

        function closeModal(event) {
            if (event.keyCode === 27) {
                instance.close();
            }
        }
    }
}