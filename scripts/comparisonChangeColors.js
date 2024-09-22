const pixelProContainer = document.querySelector(".comparison__color-pixel-pro");
const pixelProImg = document.getElementById("pixelProImg");
const colorSpanPro = document.querySelector(".comparison__color-pixel-pro .span-color");

const proNavColor = document.getElementById("comparison-pro");
const basicNavColor = document.getElementById("comparison-basic");

const pixelContainer = document.querySelector(".comparison__color-pixel");
const pixelBasicImg = document.getElementById("pixelBasicImg");
const colorSpanBasic = document.querySelector(".comparison__color-pixel .span-color");

const sliderOfFeatures = document.querySelector(".comparison-features-slider");
const featureSpanIcon = document.getElementById("featureSpan");
const featureTitle = document.getElementById("featureTitle");
const featureProImg = document.getElementById("featurePro");
const featureBasicImg = document.getElementById("featureBasic");

const proDescription = document.querySelector(".comparison-pro-description");
const basicDescription = document.querySelector(".comparison-basic-description");


let touchInSlider = 0;


const resetColors = (isPro,e)=>{
	if(isPro){
		for(let i = 0; i < proNavColor.children.length; i++){
			if(proNavColor.children[i].classList != e.target.classList){
				proNavColor.children[i].style.outline = "none";
			}
		}
	}
	else{
		for(let i = 0; i < basicNavColor.children.length; i++){
			if(basicNavColor.children[i].classList != e.target.classList){
				basicNavColor.children[i].style.outline = "none";
			}
		}
	}
}

const changeColor = (color,isPro)=>{
	if(isPro){
		try{
			pixelProImg.src = `./img/varietyColors/pixel9Pro${color.replace("_","")}.webp`;
			colorSpanPro.textContent = color.replace("_"," ");
		} catch(e){
			//pass
		}
	} else{
		try{
			pixelBasicImg.src = `./img/varietyColors/pixel9${color.replace("_","")}.webp`;
			colorSpanBasic.textContent = color.replace("_", " ");
		}catch(e){
			//pass
		}
	}
}



pixelProContainer.addEventListener("click",(e)=>{
	if(e.target.classList[1] == "changeColor"){
		changeColor(e.target.id,true);
		e.target.style.outline = "2px solid #38e";
		resetColors(true,e);
	}
})

pixelContainer.addEventListener("click",(e)=>{
	if(e.target.classList[1] == "changeColor"){
		changeColor(e.target.id,false);
		e.target.style.outline = "2px solid #38e";
		resetColors(false,e);
	}
})

sliderOfFeatures.addEventListener("click",(e)=>{
	if(e.target.id == "comparisonLeft"){
		if (touchInSlider <= 0) {
			touchInSlider = 0;
			verifySliderStatus();
		}
		else {
			touchInSlider--;
			verifySliderStatus();
		}
	}
	else if(e.target.id == "comparisonRight"){
		if(touchInSlider >= 3){
			touchInSlider = 3;
			verifySliderStatus();
		}
		else {
			touchInSlider++;
			verifySliderStatus();
		}
	}
});
const verifySliderStatus = ()=>{
	if(touchInSlider == 0){
		featureSpanIcon.textContent = "smartphone";
		featureTitle.textContent = "Pantalla";
		featureProImg.src = "./img/comparisonFeatures/proScreen.webp";
		featureBasicImg.src = "./img/comparisonFeatures/basicScreen.webp";
		featureProImg.style.display = "block";
		featureBasicImg.style.display = "block";
		proDescription.innerHTML = `
		<strong>Super Actua de 6,3" o 6,8"</strong><br>
                             	<strong>Hasta 3000 nits</strong><br>
                                <span>Brillo máximo</span>
		`;
		basicDescription.innerHTML = `
		<strong>Pantalla Actua de 6,3"</strong><br>
                                <strong>Hasta 2700 nits</strong><br>
                                <span>Brillo máximo</span>
		`;
	} 

	else if(touchInSlider == 1){
		featureSpanIcon.textContent = "texture";
		featureTitle.textContent = "Material";
		featureProImg.src = "./img/comparisonFeatures/proMaterial.webp";
		featureBasicImg.src = "./img/comparisonFeatures/basicMaterial.webp";
		featureProImg.style.display = "block";
		featureBasicImg.style.display = "block";
		proDescription.innerHTML = `
		<p>Panel trasero de vidrio mate y suave con marco metálico pulido</p>
		`;
		basicDescription.innerHTML = `
		<p> Panel trasero de vidrio pulido con un marco metálico satinado</p>
		`;
	} 

	else if(touchInSlider == 2){
		featureSpanIcon.textContent = "photo_camera";
		featureTitle.textContent = "Cámara";
		featureProImg.src = "./img/comparisonFeatures/cameraPro.webp";
		featureBasicImg.src = "./img/comparisonFeatures/cameraBasic.webp";
		featureProImg.style.display = "block";
		featureBasicImg.style.display = "block";
		proDescription.innerHTML = `
		<strong>Cámara trasera triple Pro</strong><br>
		<span>Incluye una lente teleobjetivo</span><br>
        <strong>Zoom óptico</strong><br>
        <span>0,5x, 1x, 2x, 5x y 10x</span><br>
        <strong>Visión Nocturna</strong><br>
        <span>Foto</span><br>
        <span>Video</span>
		`;
		basicDescription.innerHTML = `
		<strong>Cámara trasera dual avanzada</strong><br>
		<span>-</span><br>
        <strong>Zoom óptico</strong><br>
        <span>0,5x, 1x y 2x</span><br>
        <strong>Visión Nocturna</strong><br>
        <span>Foto</span><br>
        <span>-</span>
		`;
	}

	else if(touchInSlider == 3){
		featureSpanIcon.textContent = "memory";
		featureTitle.textContent = "Rendimiento";
		featureProImg.style.display = "none"
		featureBasicImg.style.display = "none";
		proDescription.innerHTML = `
		<span class="material-symbols-outlined" style="color: #38e; font-size: 2rem;">memory</span><br>
		<strong>Chip Google Tensor G4</strong><br>
		<span class="material-symbols-outlined" style="color: #346e2a; font-size: 2rem;">speed</span><br>
        <strong>16 GB - RAM</strong><br>
		<span class="material-symbols-outlined" style="color: #444; font-size: 2rem;">battery_full_alt</span><br>
        <strong>Más de 24 de duración de la batería</strong><br>
		`;
		basicDescription.innerHTML = `
		<span class="material-symbols-outlined" style="color: #38e; font-size: 2rem;">memory</span><br>
		<strong>Chip Google Tensor G4</strong><br>
		<span class="material-symbols-outlined" style="color: #346e2a; font-size: 2rem;">speed</span><br>
        <strong>12 GB - RAM</strong><br>
		<span class="material-symbols-outlined" style="color: #444; font-size: 2rem;">battery_full_alt</span><br>
        <strong>Más de 24 de duración de la batería</strong><br>
		`;
	}
}

verifySliderStatus();