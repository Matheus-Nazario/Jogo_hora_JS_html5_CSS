function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 13
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 00 && hora < 12 ) {
        img.src='morning.png'
        window.document.body.style.background = "yellow"
    }
    else if ( hora >= 12 && hora < 18 ) {
        img.src='after.png'
        window.document.body.style.background = "red"
    }
    else{
        img.src='nigth.png'
        window.document.body.style.background = "black"
    }
}