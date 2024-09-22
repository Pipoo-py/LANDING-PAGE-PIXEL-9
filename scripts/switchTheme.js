const themeDivContainer = document.querySelector(".nav__switch-theme-container");
const elementsToSwitchTheme = document.querySelectorAll(".canSwitch");


themeDivContainer.addEventListener("click",(e)=>{
    if(e.target.textContent == "dark_mode"){
        e.target.textContent = "light_mode";
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#fff";
        for(let i = 0; i < elementsToSwitchTheme.length; i++){
            elementsToSwitchTheme[i].style.backgroundColor = "#444";
            elementsToSwitchTheme[i].style.color = "#eee";
        }
        document.querySelector("h1").style.color = "#38e";
        document.querySelectorAll(".list__item > a").forEach(link=>{
            link.style.color = "#fff";
        })
        document.querySelectorAll(".declaration-top-section").forEach(declaration=>{
            declaration.style.borderBottom = "1px solid #eee";
        })
        document.querySelectorAll("label > h4").forEach(question=>{
            question.style.color = "#fff";
        })
        document.querySelectorAll(".main__form input").forEach(input=>{
            input.style.color = "#fff";
        })
        document.querySelectorAll(".comparison-features-slider > button").forEach(button=>{
            button.style.color = "#fff";
        })
        document.getElementById("leftScroll").style.boxShadow = "0 0 12px 12px #222e";
        document.querySelector(".left-button-container").style.boxShadow = "0 0 12px 12px #222e";
        document.querySelector(".left-button-container").style.backgroundColor = "#222";
        document.getElementById("rightScroll").style.boxShadow = "0 0 12px 12px #222e";
        document.querySelector(".right-button-container").style.boxShadow = "0 0 12px 12px #222e";
        document.querySelector(".right-button-container").style.backgroundColor = "#222";
        document.querySelector(".footer__general-container").style.backgroundColor = "#555";
    }
    else{
        e.target.textContent = "dark_mode";
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#222";
        for(let i = 0; i < elementsToSwitchTheme.length; i++){
            elementsToSwitchTheme[i].style.backgroundColor = "#f8f8f8";
            elementsToSwitchTheme[i].style.color = "#222";
        }
        document.querySelector("h1").style.color = "#346e2a";
        document.querySelectorAll(".list__item > a").forEach(link=>{
            link.style.color = "#222";
        })
        document.querySelectorAll(".declaration-top-section").forEach(declaration=>{
            declaration.style.borderBottom = "1px solid #222";
        })
        document.querySelectorAll("label > h4").forEach(question=>{
            question.style.color = "#222";
        })
        document.querySelectorAll(".main__form input").forEach(input=>{
            input.style.color = "#222";
        })
        document.querySelectorAll(".comparison-features-slider > button").forEach(button=>{
            button.style.color = "#222";
        })
        document.getElementById("leftScroll").style.boxShadow = "0 0 12px 0px #bbba";
        document.querySelector(".left-button-container").style.boxShadow = "0 0 12px 12px #fffe";
        document.querySelector(".left-button-container").style.backgroundColor = "#fff";
        document.getElementById("rightScroll").style.boxShadow = "0 0 12px 0px #bbba";
        document.querySelector(".right-button-container").style.boxShadow = "0 0 12px 12px #fffe";
        document.querySelector(".right-button-container").style.backgroundColor = "#fff";
        document.querySelector(".footer__general-container").style.backgroundColor = "#38e";
    }
})

