// Tradução dos textos com atributos data-pt e data-en.
const languageButton = document.getElementById("lang");
let currentLanguage = "pt";

languageButton.addEventListener("click", () => {
    currentLanguage = currentLanguage === "pt" ? "en" : "pt";
    document.documentElement.lang = currentLanguage === "pt" ? "pt-BR" : "en";
    languageButton.textContent = currentLanguage === "pt" ? "EN" : "PT";

    document.querySelectorAll("[data-pt][data-en]").forEach((element) => {
        element.textContent = element.dataset[currentLanguage];
    });
});