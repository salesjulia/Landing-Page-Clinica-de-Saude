const form = document.getElementById("form-contato");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;

    form.innerHTML = `
        <p style="text-align: center; font-size: 18px; color: #000000;">
            ${nome}, sua solicitação de contato foi enviada com sucesso!<br>
            Em breve entraremos em contato por telefone ou e-mail.
        </p>
    `;
});