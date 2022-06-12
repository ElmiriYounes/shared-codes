(()=>{
    let target = document.querySelector('.target');
    for(let i = 1; i <= 20; i++){
        setTimeout(() => {
            let span = document.createElement('span');
            let red = Math.floor(Math.random()*256);
            let green = Math.floor(Math.random()*256);
            let blue = Math.floor(Math.random()*256);
            span.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            target.appendChild(span);    
        }, i * 200);
    }

    document.querySelector('button').onclick = () =>{
        location.reload();
    }
})();