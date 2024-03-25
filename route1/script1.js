const dropArea = document.querySelector(".drag-area");
const dragText = dropArea.querySelector("header");
const button = dropArea.querySelector("button");
const input = dropArea.querySelector("input");
let file;


button.onclick = () => {
   input.click();  //when clicked on the button -> input will also be clicked
}

input.addEventListener("change" , function(){
    file = this.files[0]; //if multiple files added then only the first image would be considered
    dropArea.classList.add("active");
    showFile();
});



dropArea.addEventListener("dragover", (e) => {
    e.preventDefault(); //preventing default opening of the file in the next tab
    console.log("File is over DragArea");
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
});

dropArea.addEventListener("dragleave", ()=>{
    console.log("File away from DragArea");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
    showFile();
});

dropArea.addEventListener("drop" , (e) =>{
    e.preventDefault();
    console.log("File is dropped on Droparea");
    file = e.dataTransfer.files[0];
    showFile();
    
});

function showFile(){

    let fileType = file.type;
    console.log(fileType);

    let validExtensions = ["image/jpeg" , "image/jpg" , "image/png"];

    if(validExtensions.includes(fileType)){
        console.log("This is an image file");
        let fileReader = new FileReader();
         fileReader.onload = () => {
            let fileURL = fileReader.result;
            console.log(fileURL);
            let imgTag = `<img src = "${fileURL}">`;
            dropArea.innerHTML = imgTag;

        }
         fileReader.readAsDataURL(file);
    }
    
    else{
        alert("Kindly Upload an image file!");
        dropArea.classList.remove("active");
        
    }
}