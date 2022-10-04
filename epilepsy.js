var startNow = document.getElementById('start');
startNow.addEventListener("click", start);

function epilepsy(){
    let colors = ['red','green','pink','blue','black','white'];
    const random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[random];
    console.log(colors[random]);
}

function start(){
    setInterval(epilepsy, 1);
}
