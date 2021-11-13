function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var dia = window.document.getElementById('dia')
    var tarde = window.document.getElementById('tarde')
    var noite = window.document.getElementById('noite')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'foto-manha.jpg'
        dia.innerHTML = 'Bom dia'
        document.body.style.background = '#FFFFF0'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'foto-tarde.jpg'
        tarde.innerHTML = 'Boa tarde'
        document.body.style.background = '#D2691E'
    } else {
        //BOA NOITE
        img.src = 'foto-noite.jpg'
        noite.innerHTML = 'Boa noite'
        document.body.style.background = '#2F4F4F'
    }
}
