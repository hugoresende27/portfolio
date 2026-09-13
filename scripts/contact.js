$(document).ready(function () {

    const email = 'hugoresende27@gmail.com';

    function gmailComposeUrl(subject, body) {
        return 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(email)
            + '&su=' + encodeURIComponent(subject)
            + '&body=' + encodeURIComponent(body);
    }

    $('.copy-email').on('click', function () {
        const btn = $(this);

        navigator.clipboard.writeText(email).then(function () {
            btn.addClass('copied').find('i').removeClass('fa-copy').addClass('fa-check');

            setTimeout(function () {
                btn.removeClass('copied').find('i').removeClass('fa-check').addClass('fa-copy');
            }, 1500);
        });
    });

    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        const nome = $('#campo-nome').val().trim();
        const emailCliente = $('#campo-email').val().trim();
        const loja = $('#campo-loja').val().trim();
        const mensagem = $('#campo-mensagem').val().trim();

        const corpo = 'Nome: ' + nome
            + '\nEmail: ' + emailCliente
            + '\nLoja / ERP: ' + loja
            + '\n\n' + mensagem;

        window.open(gmailComposeUrl('Contacto via portefólio', corpo), '_blank');
    });

});
