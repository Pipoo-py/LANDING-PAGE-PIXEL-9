const containerOfSelect = document.querySelector(".select-color-container");
const pixelImg = document.getElementById("pixelImg");

containerOfSelect.addEventListener("click",(e)=>{
    if(e.target.id == "first-color-header"){
        pixelImg.src = "./img/firstImgPixel.avif";
        e.target.style.border = "2px solid #000";
        for(let i = 0; i < containerOfSelect.children.length; i++){
            if(containerOfSelect.children[i].id != e.target.id){
                containerOfSelect.children[i].style.border = "none";
            }
        }
        pixelImg.style.animation = "viewFirstImg .8s forwards";
        setTimeout(()=> pixelImg.style.animation = "none",800);
    } 
    else if(e.target.id == "second-color-header"){
        pixelImg.src = "./img/secondImgPixel.avif";
        e.target.style.border = "2px solid #000";
        for(let i = 0; i < containerOfSelect.children.length; i++){
            if(containerOfSelect.children[i].id != e.target.id){
                containerOfSelect.children[i].style.border = "none";
            }
        }
        pixelImg.style.animation = "viewSecondImg .8s both";
        setTimeout(()=> pixelImg.style.animation = "none",800);
    } else if(e.target.id == "third-color-header"){
        pixelImg.src = "./img/thirdImgPixel.avif";
        e.target.style.border = "2px solid #000";
        for(let i = 0; i < containerOfSelect.children.length; i++){
            if(containerOfSelect.children[i].id != e.target.id){
                containerOfSelect.children[i].style.border = "none";
            }
        }
        pixelImg.style.animation = "viewThirdImg .8s both";
        setTimeout(()=> pixelImg.style.animation = "none",800);
    }
})