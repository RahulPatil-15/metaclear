const fileInput= document.getElementById("fileInput");
fileInput.addEventListener("change", function() {
    console.log(fileInput.files[0]);
});

