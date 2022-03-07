localStorage = window.localStorage

document.addEventListener("keydown", keydownEvent)

function keydownEvent(e){
    if(e.key === 'd'){
        localStorage.setItem("theme", "dark")
    }
    if(e.key === 'l'){
        localStorage.setItem("theme", "light")
    }
}