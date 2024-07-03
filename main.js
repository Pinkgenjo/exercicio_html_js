const form = document.getElementById("formulario");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const valorCampoA = Number(document.getElementById("campoA").value);
    const valorCampoB = Number(document.getElementById("campoB").value);

const vrCampoA = document.getElementById("campoA");
const vrCampoB = document.getElementById("campoB");

    const msgSucesso = `O valor do Campo B é maior que o valor do Campo A`;
    const msgErro = `O valor do Campo B é menor que o valor do Campo A`;

    let frmCalculo = false;

    function vValor(valorCampoA, valorCampoB) {
    return valorCampoA < valorCampoB;
    }

    const mS = document.querySelector(".success-msg");
    const mErr = document.querySelector(".error-msg");

    frmCalculo = vValor(valorCampoA, valorCampoB);

    if (frmCalculo) {
    mS.innerHTML = msgSucesso;
    mS.style.display = "block"; 
    mErr.style.display = "none";

    vrCampoA.style.border = "";
    mErr.innerHTML = "";
    vrCampoA.value = "";
    vrCampoB.value = "";
    } else {
    vrCampoA.style.border = "1px solid red";
    mErr.innerHTML = msgErro;
    mErr.style.display = "block"; 
    mS.style.display = "none";

    vrCampoB.value = "";
    }
});