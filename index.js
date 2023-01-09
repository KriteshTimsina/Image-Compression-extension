const inputField = document.querySelector("#input");
const showImage = document.getElementById("image-field")
const handleInputClick = () => {
    const file = inputField.files[0];

    showImage.src = URL.createObjectURL(file);
    showImage.style.width = "140px";

}

inputField.addEventListener('change', handleInputClick)

