function calcularEnergia() {
    const nucleoInput = document.getElementById('nucleo-input').value;

    // Verifica se a entrada é um número válido em notação científica
    const nucleo = parseFloat(nucleoInput);

    if (isNaN(nucleo) || nucleo < 1) {
        document.getElementById('resultado').innerText = 
            "Por favor, insira um número válido de núcleos de Deutério (maior que 0).";
        return;
    }

    const energiaPorNucleoJoules = 3.2 * Math.pow(10, -19); // Energia em Joules
    const totalEnergiaJoules = nucleo * energiaPorNucleoJoules;

    document.getElementById('resultado').innerText = 
        `Energia liberada: ${totalEnergiaJoules.toExponential(10)} Joules`;
}
