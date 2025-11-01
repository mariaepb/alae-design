document.getElementById("form-contato").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Simulando o envio para um "banco de dados" local
    const contato = { nome, email, mensagem, data: new Date().toLocaleString() };

    // Salva no localStorage (simulando um banco)
    let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
    contatos.push(contato);
    localStorage.setItem("contatos", JSON.stringify(contatos));

    document.getElementById("msg-sucesso").innerText = "Mensagem enviada com sucesso!";
    document.getElementById("form-contato").reset();

    setTimeout(() => {
        document.getElementById("msg-sucesso").innerText = "";
    }, 3000);
});
