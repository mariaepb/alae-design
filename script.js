document.getElementById("form-contato").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target; // o próprio formulário
    const msgSucesso = document.getElementById("msg-sucesso");

    // Envia os dados para o endpoint do Formspree
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            msgSucesso.innerText = "Mensagem enviada com sucesso! ✅";
            form.reset(); // limpa os campos
        } else {
            msgSucesso.innerText = "Ocorreu um erro ao enviar. Tente novamente.";
        }
    } catch (error) {
        msgSucesso.innerText = "Ocorreu um erro ao enviar. Tente novamente.";
    }

    // Limpa a mensagem de sucesso após 3 segundos
    setTimeout(() => {
        msgSucesso.innerText = "";
    }, 3000);
});

