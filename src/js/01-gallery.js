// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// below code from previous homework


const galleryEl = document.querySelector(`.gallery`);

const imageMarkup = createImageCardMarkup(galleryItems);

galleryEl.insertAdjacentHTML(`beforeend`, imageMarkup);

const galleryImageEl = document.querySelector(`.gallery__image`);

galleryImageEl.addEventListener(`click`, onClickOfImage);

let gallery = new SimpleLightbox('.gallery a');

function onClickOfImage(){
    gallery.on('show.simplelightbox', function () {
       
}); 
};

//---------------------------------------
function createImageCardMarkup(galleryImage) {
    return galleryImage.map(({ preview,
        original,
        description }) => {
        return `<li>   
  <a class="gallery__item" href=${original} onclick="return false"><img class="gallery__image" src=${preview} alt=${description}/>
     </a></li>
`;
    }).join(``);  
};


// галерея працює тільки на localhost