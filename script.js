
const fileInput= document.getElementById("fileInput");

fileInput.addEventListener("change", function() {

    const file = fileInput.files[0];
    exifr.parse(file).then(function (data) {
        document.getElementById("metaOutput").textContent =
        data ? JSON.stringify(data, null, 2) : "No metadata found.";
    }).catch(function () {
        document.getElementById("metaOutput").textContent =
        "No readanle metadata in this file."

    });
    
    
    
    const img = new Image();

    img.src = URL.createObjectURL(fileInput.files[0]);

    img.onload = function () { 

        const canvas = document.getElementById("canvas");
        canvas.width = img.width; canvas.height = img.height;
        canvas.getContext("2d").drawImage(img, 0, 0);

    };

});

const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", function(){

    const canvas = document.getElementById("canvas");
    const link = document.createElement("a");
    link.download = "clean-image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();

});