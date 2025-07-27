AOS.init();

const dataDoEvento = new Date("Jul 31, 2025, 19:00:00");
const timeStampDoEVento = dataDoEvento.getTime();

const contagem = setInterval(function() {
    const agora = new Date();
    const timeStampDoAtual = agora.getTime();

    const distanciaDoEvento = timeStampDoEVento - timeStampDoAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaDoEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaDoEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaDoEvento % horaEmMs) / minEmMs)
    const segundosAteOEvento = Math.floor((distanciaDoEvento % minEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (distanciaDoEvento < 0) {
        clearInterval(contagem);
        document.getElementById('contador').innerHTML = "Expirado"
    }

}, 1000)