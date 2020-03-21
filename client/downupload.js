function download(){
 var link=document.createElement('a');
 link.download='filename.png';
 link.href=board.toDataURL("image/png")
 link.click();
}


// function upload(){
//     var reader = new FileReader();
//     reader.onload = function(event){
//         var img = new Image();
//         img.onload = function(){
//             canvas.width = img.width;
//             canvas.height = img.height;
//             ctx.drawImage(img,0,0);
//         }
//         img.src = event.target.result;
//     }
//     reader.readAsDataURL(e.target.files[0]);     
// }
const inputTag=document.getElementById("inputFile");

inputTag.addEventListener("change",function(){
    const imgFile=inputTag.files[0];
    imgFile.src=URL.createObjectURL(imgFile);
    const img=document.createElement("img");
    img.height=60;
    const body=document.querySelector("body");
    body.appendChild(img);
})