import { galleryItems } from './gallery-items.js';
// Change code below this line



// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarcup = createImageColection(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarcup);


function createImageColection(galleryItems) {
    return  galleryItems
    .map(({preview, original, description }) => {
        return `
        <li class="gallery__item">
          <a class="gallery__link" href="large-image.jpg">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
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
galleryEventListener.addEventListener('keydown', closeByEsc); 

let modalWindow;

function getModalPicture (event) {
    event.preventDefault();
    // console.log(event.target.dataset.source);
    const imgUrl = event.target.dataset.source
    modalWindow = basicLightbox.create(`
    <img width="1400" height="auto" src="${imgUrl}">
    `);
    modalWindow.show()

}
function closeByEsc(evt) {
    // console.log(evt.keyCode);
    if(evt.keyCode === 27){
        modalWindow.close()
    } 
}

