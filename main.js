class celular {
    constructor (color, peso, resolucionDePantalla, resolucionDeCamara, memoriaRam) {
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = resolucionDePantalla;
        this.resolucionDeCamara = resolucionDeCamara,
        this.memoriaRam = memoriaRam;
        this.encendido = false;
    }

    prender () {
        if (this.encendido == false) {
            alert("encendiendo");
            this.encendido = true;
        }
        else {
            alert("Su dispocitivo ya esta encendido");
        }
    }

    apagar () {
        if (this.encendido == true) {
            alert("apagando");
            this.encendido = false;
        }
        else {
            alert("Su dispocitivo esta apagado");
        }
    }

    reiniciar () {
        if (this.encendido == true) {
            this.apagar();
            this.prender();
        }
        else {
            alert("Su dispocitivo esta apagado");
        }
    }

    tomarFoto () {
        if (this.encendido == true) {
            alert("Foto realizada en" + this.resolucionDeCamara);
        }
        else {
            alert("Su dispocitivo esta apagado");
        }
    }

    grabar () {
        if (this.encendido == true) {
            alert("Grabacion realizada en " + this.resolucionDeCamara);
        }
        else {
            alert("Su dispocitivo esta apagado");
        }
    }

    mostrarDatos () {
        document.write(
            "Color: " + this.color + "<br>" +
            "Peso: " + this.peso + "<br>" +
            "Resolucion de pantalla: " + this.resolucionDePantalla + "<br>" +
            "Resolucion de camara: " + this.resolucionDeCamara + "<br>" +
            "Memoria ram: " + this.memoriaRam + "<br>"
        );
    }
}

class celularGamaAlta extends celular {
    constructor (color, peso, resolucionDePantalla, resolucionDeCamara, memoriaRam, resolucionDeCamara2) {
        super(color, peso, resolucionDePantalla, resolucionDeCamara, memoriaRam);
        this.resolucionDeCamara2 = resolucionDeCamara2;
    }

    grabarCamaraSuperLenta () {
        if (this.encendido == true) {
            alert("Grabacion super lenta realizada en " + this.resolucionDeCamara);
        }
        else {
            alert("Su dispocitivo esta apagado");
        }
    }

    reconocimientoFacial () {
        if (this.encendido == true) {
            alert("Reconocimiento exitoso");
        }
        else {
            alert("Su dispocitivo esta apagado");
        }
    }

    mostrarDatosGamaAlta () {
        this.mostrarDatos()
        document.write(
            "resolucion de camara 2: " + this.resolucionDeCamara2
        );
    }

}

const S10 = new celular("negro", "180g", "2K", "4K", "6GB");
const S9plus = new celular("negro", "200g", "1440p", "4K", "6GB");
const S9 = new celular("negro", "170g", "1080p", "4K", "4GB");

const S10plus = new celularGamaAlta("negro", "220g", "4K", "4K", "8GB", "8K");
const S20 = new celularGamaAlta("negro", "240g", "4K", "8K", "12GB", "8K");
const S20plus = new celularGamaAlta("negro", "210g", "4K", "8K", "16GB", "12K");