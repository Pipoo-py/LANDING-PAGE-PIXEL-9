let currentIndex = 0;
const declarations = document.querySelectorAll('.declaration');
const totalDeclarations = declarations.length;

function showDeclaration(index) {
    if (index >= totalDeclarations) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalDeclarations - 1;
    } else {
        currentIndex = index;
    }

    declarations.forEach((declaration, idx) => {
        declaration.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

setInterval(() => {
    showDeclaration(currentIndex + 1);
}, 3000);

showDeclaration(currentIndex);
