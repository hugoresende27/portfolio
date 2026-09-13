$(document).ready(function () {

    const email = 'hugoresende27@gmail.com';

    function gmailComposeUrl(subject, body) {
        return 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(email)
            + '&su=' + encodeURIComponent(subject)
            + '&body=' + encodeURIComponent(body);
    }

    function currentDict() {
        const lang = (window.i18n && window.i18n.getLang()) || 'pt';
        return window.i18n.translations[lang];
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

        const dict = currentDict();

        const nome = $('#campo-nome').val().trim();
        const emailCliente = $('#campo-email').val().trim();
        const loja = $('#campo-loja').val().trim();
        const mensagem = $('#campo-mensagem').val().trim();

        const corpo = dict['email-label-nome'] + ': ' + nome
            + '\n' + dict['email-label-email'] + ': ' + emailCliente
            + '\n' + dict['email-label-loja'] + ': ' + loja
            + '\n\n' + mensagem;

        window.open(gmailComposeUrl(dict['email-subject'], corpo), '_blank');
    });

});
