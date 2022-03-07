localStorage = window.localStorage

backgroundChecks = setInterval(backgroundChecksFunction, 100);

function backgroundChecksFunction(){
    
    if(localStorage.getItem('theme')){
        theme = localStorage.getItem('theme')
        if(theme === "dark"){
            document.body.style.backgroundColor = '#242124'
            document.body.style.backgroundColor = '#242124'
            document.body.style.color = "#FAF9F6"
            document.getElementById('info').style.background = "#242124"
            document.getElementById('play').style.background = "#242124"
        
            document.getElementById('info').style.color = "#FAF9F6"
            document.getElementById('play').style.color = "#FAF9F6"
       
            document.getElementById('info').style.borderColor = "#242124"
            document.getElementById('play').style.borderColor = "#242124"
        }else if(theme === "light"){
            document.body.style.backgroundColor = '#FAF9F6'
            document.body.style.backgroundColor = '#FAF9F6'
            document.body.style.color = "#242124"
            document.getElementById('info').style.background = "#FAF9F6"
            document.getElementById('play').style.background = "#FAF9F6"
        
            document.getElementById('info').style.color = "#242124"
            document.getElementById('play').style.color = "#242124"

            document.getElementById('info').style.borderColor = "#FAF9F6"
            document.getElementById('play').style.borderColor = "#FAF9F6"
        }
    }else{
        document.body.style.backgroundColor = '#FAF9F6'
        document.body.style.backgroundColor = '#242124'
        document.body.style.color = "#FAF9F6"
        document.getElementById('info').style.background = "#242124"
        document.getElementById('play').style.background = "#242124"
    
        document.getElementById('info').style.color = "#FAF9F6"
        document.getElementById('play').style.color = "#FAF9F6"
   
        document.getElementById('info').style.borderColor = "#242124"
        document.getElementById('play').style.borderColor = "#242124"
    }
}
