// Filtra os espaços reservados pelas categorias de tatuagem.
const filterButtons = document.querySelectorAll("[data-filter]");
const galleryItems = document.querySelectorAll("[data-style]");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        galleryItems.forEach((item) => {
            const selectedFilter = button.dataset.filter;
            item.hidden = selectedFilter !== "all" && item.dataset.style !== selectedFilter;
        });
    });
});
