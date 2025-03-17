function calcularIRPF() {
    let salario = parseFloat(document.getElementById("salario").value);
    if (isNaN(salario) || salario <= 0) {
        alert("Digite um salário válido.");
        return;
    }

    let imposto = calcularImposto(salario);
    let aliquotaEfetiva = calcularAliquotaEfetiva(salario, imposto);

    document.getElementById("irpf").textContent = `R$ ${imposto.toFixed(2)}`;
    document.getElementById("aliquota").textContent = `${aliquotaEfetiva.toFixed(2)}%`;
}

function calcularFaixa1(salario) {
    return 0; // Não há imposto nessa faixa, por isso o salario não é usado.
}

function calcularFaixa2(salario) {
    return (salario - 2259.20) * 0.075;
}

function calcularFaixa3(salario) {
    return (salario - 2826.65) * 0.15 + calcularFaixa2(2826.65);
}

function calcularFaixa4(salario) {
    return (salario - 3751.05) * 0.225 + calcularFaixa3(3751.05);
}

function calcularFaixa5(salario) {
    return (salario - 4664.68) * 0.275 + calcularFaixa4(4664.68);
}

function calcularImposto(salario) {
    if (salario <= 2259.20) {
        return calcularFaixa1(salario);
    } else if (salario <= 2826.65) {
        return calcularFaixa2(salario);
    } else if (salario <= 3751.05) {
        return calcularFaixa3(salario);
    } else if (salario <= 4664.68) {
        return calcularFaixa4(salario);
    } else {
        return calcularFaixa5(salario);
    }
}

function calcularAliquotaEfetiva(salario, imposto) {
    return (imposto / salario) * 100;
}

function limpar() {
    document.getElementById("salario").value = "";
    document.getElementById("irpf").textContent = "";
    document.getElementById("aliquota").textContent = "";
}