let lampada = {
    urlLampadaApagada: 'assets/images/lampada_apagada.jpg',
    urlLampadaAcesa: 'assets/images/lampada_acesa.jpg',
    urlLampadaQuebrada: 'assets/images/lampada_quebrada.jpg',
    somInterruptor: new Audio('assets/sounds/interruptor.mp3'),
    somLampadaQuebrando: new Audio('assets/sounds/vidro_quebrado.mp3'),

    acenderOuApagar: function() {
        let imagem = document.getElementById("lampada");
        if (!imagem.src.match('quebrada')) {
            this.somInterruptor.play();
            if (imagem.src.match('apagada')) {
                imagem.src = this.urlLampadaAcesa;
            } else {
                imagem.src = this.urlLampadaApagada;
            }
        }
    }
}