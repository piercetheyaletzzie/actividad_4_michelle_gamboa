let foco = document.querySelector('img');

foco.onclick = function() {
    let mySrc = foco.getAttribute('src');
    if(mySrc === 'image/focoOff.png') {
        foco.setAttribute ('src','image/focoOn.png');

    } else {
        foco.setAttribute('src','image/focoOff.png');
   }
}