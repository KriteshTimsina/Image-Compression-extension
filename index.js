const upload = document.querySelector(".upload");
const inputField = document.querySelector("#input");
const showImage = document.querySelector(".image");
const hiddenMenus = document.getElementsByClassName("forms")[0];

const handleInputClick = () => {
    const file = inputField.files[0];
    showImage.src = URL.createObjectURL(file);
    showImage.style.width = "100%";
    showImage.className = ".image.active";
    inputField.disabled = true;
    hiddenMenus.className = ".forms.active"
}

inputField.addEventListener('change', handleInputClick)

upload.addEventListener('click', () => inputField.click())

