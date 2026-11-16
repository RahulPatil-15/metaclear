
const fileInput= document.getElementById("fileInput");

fileInput.addEventListener("change", function() {

    const img = new Image();

    img.src = URL.createObjectURL(fileInput.files[0]);

    img.onload = function () { 

        const canvas = document.getElementById("canvas");
        canvas.width = img.width; canvas.height = img.height;
        canvas.getContext("2d").drawImage(img, 0, 0);

    };

});

