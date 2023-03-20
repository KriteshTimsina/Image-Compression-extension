const upload = document.getElementsByClassName("upload")[0];
const inputField = document.querySelector("#input");
const showImage = document.querySelector(".image");
const hiddenMenus = document.getElementsByClassName("forms")[0];
const clickText = document.getElementById("click-me");

const width = document.getElementById("width");
const height = document.querySelector("#height");
const aspectRatio = document.querySelector("#ratio");
const qualityInput = document.querySelector("#quality");
const downloadBtn = document.getElementById("download-btn");

let originalImageRatio;

const handleInputClick = () => {
    const file = inputField.files[0];
    showImage.src = URL.createObjectURL(file);
    // showImage.style.width = "100%";
    upload.classList.add(".upload.active");

    // inputField.disabled = true;
    hiddenMenus.className = ".forms.active";

    showImage.addEventListener('load', () => {
        width.value = showImage.naturalWidth;
        height.value = showImage.naturalHeight;
        originalImageRatio = showImage.naturalWidth / showImage.naturalHeight;
        clickText.innerText="";
        // showImage.className = ".active"

    })
}

width.addEventListener("keyup", function () {
    const heightChange = aspectRatio.checked ? width.value / originalImageRatio : height.value;
    height.value = Math.floor(heightChange);
})

height.addEventListener("keyup", function () {
    const widthChange = aspectRatio.checked ? height.value / originalImageRatio : width.value;
    width.value = Math.floor(widthChange);
})
const handleDownload = () => {
    const canvas = document.createElement("canvas");
    const a = document.createElement("a");
    const contxt = canvas.getContext("2d");

    const imageQuality = qualityInput.checked ? 0.7 : 1.0;
    canvas.width = width.value;
    canvas.height = height.value;

    contxt.drawImage(showImage, 0, 0, canvas.width, canvas.height);

    a.href = canvas.toDataURL("image/jpeg", imageQuality);
    a.download = `Image ${new Date().getTime()}`;
    a.click();
}

downloadBtn.addEventListener("click", handleDownload)

inputField.addEventListener('change', handleInputClick)

upload.addEventListener('click', () => inputField.click())

