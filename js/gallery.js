// Filtros da galeria e ampliação das fotografias originais.
const filterButtons = document.querySelectorAll("[data-filter]");
const galleryItems = document.querySelectorAll("[data-style]");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");

        galleryItems.forEach((item) => {
            item.hidden = button.dataset.filter !== "all" && item.dataset.style !== button.dataset.filter;
        });
    });
});

galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
        lightboxImage.src = item.dataset.image;
        lightboxImage.alt = item.querySelector("img").alt;
        lightboxCaption.textContent = item.dataset.caption;
        lightbox.showModal();
    });
});

document.getElementById("close-lightbox").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
});