const page = document.body.style;
page.background = "#2E2D2D"; //Background escuro;
page.color = 'white'; //Letra branca;

var button = document.body.getElementsByClassName('fichaava fichatec');
let info = document.getElementsByClassName("texto_interno");
button.addEventListener("click", function () {
    if (info.classList.contains("texto_interno")) {
        info.classList.remove("texto_interno");
        btn.innerHTML = "Hide Information";
    } else {
        info.classList.add("texto_interno");
        btn.innerHTML = "Show Information";
    }
});
