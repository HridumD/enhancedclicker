localStorage = window.localStorage

backgroundChecks = setInterval(backgroundChecksFunction, 100);

CTAmt = 0; 
CTPerClick = 1;

function backgroundChecksFunction(){
    document.getElementById('counter').innerText = CTAmt + " CT"
}

if(localStorage.getItem('CTAmt')){
    CTAmt = parseInt(localStorage.getItem('CTAmt'))
}else{
    localStorage.setItem('CTAmt', 0)
    CTAmt = 0;
}

if(localStorage.getItem('CTPerClick')){
    CTPerClick = parseInt(localStorage.getItem('CTPerClick'))
}else{
    localStorage.setItem('CTPerClick', 1)
    CTPerClick = 1;
}

function addCTOnClick(){
    CTAmt = CTAmt + CTPerClick;
    document.getElementById('counter').innerText = CTAmt + " CT"
    localStorage.setItem('CTAmt', CTAmt);
}

//Debug