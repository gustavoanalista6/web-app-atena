## Tecnologias
-[] html, css, js

VERSÃO DO CHAT  MAIOR UM POUCO


<script>
const chatButton = document.getElementById('chatButton');

chatButton.addEventListener('click', () => {
    let iframe = document.getElementById('chatbotIframe');

    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.src = 'https://admin.toolzz.ai/embed/93e14a39-37e0-47fb-8e7d-18240b71de19';
        iframe.id = 'chatbotIframe';

        // Estilo do chat maior
        iframe.style.position = 'fixed';
        iframe.style.bottom = '20px';
        iframe.style.right = '20px';
        iframe.style.width = '400px';
        iframe.style.height = '600px';
        iframe.style.border = 'none';
        iframe.style.borderRadius = '10px';
        iframe.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
        iframe.style.zIndex = '9999';
        iframe.style.display = 'block';

        document.body.appendChild(iframe); // adiciona no body, não dentro do botão
    } else {
        // alterna visibilidade
        iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
    }
});
</script>


VERSAO MAIOR 
