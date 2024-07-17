document.addEventListener("DOMContentLoaded", function () {
    const mainColorPicker = document.getElementById("colorPicker");
    const changeMainColorButton = document.getElementById("changeColorButton");
    const secondaryColorPicker = document.getElementById("secondaryColorPicker");
    const changeSecondaryColorButton = document.getElementById("changeSecondaryColorButton");

    const savedMainColor = localStorage.getItem('mainColor');
    if (savedMainColor) {
        document.documentElement.style.setProperty('--main-color', savedMainColor);
        mainColorPicker.value = savedMainColor;
    }


    changeMainColorButton.addEventListener("click", function () {
        const newColor = mainColorPicker.value;
        document.documentElement.style.setProperty("--main-color", newColor);
        localStorage.setItem('mainColor', newColor); 
    });

    changeSecondaryColorButton.addEventListener("click", function () {
        const newColor = secondaryColorPicker.value;
        document.documentElement.style.setProperty("--secondary-color", newColor);
        sessionStorage.setItem('secondaryColor', newColor);
    });
});
