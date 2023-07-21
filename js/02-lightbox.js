import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarcup = createImageColection(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarcup);


function createImageColection(galleryItems) {
    return  galleryItems
    .map(({preview, original, description }) => {
        return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>
        `
    })
    .join("");

}   


// console.log(createImageColection(galleryItems));

const galleryEventListener = document.querySelector("ul.gallery");
// console.log(galleryEventListener)
galleryEventListener.addEventListener("click", getModalPicture);


function getModalPicture (event) {
    event.preventDefault();
    let gallery = new SimpleLightbox('.gallery a', {overlay: false, captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250, doubleTapZoom:	2, });
    gallery.on('show.simplelightbox', function () {
        // Do something…
    });
    
    gallery.on('error.simplelightbox', function (e) {
        console.log(e); // Some usefull information
    });
    
}
