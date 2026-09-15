$(document).ready(function () {

    const email = 'hugoresende27@gmail.com';

    $('.copy-email').on('click', function () {
        const btn = $(this);

        navigator.clipboard.writeText(email).then(function () {
            btn.addClass('copied').find('i').removeClass('fa-copy').addClass('fa-check');

            setTimeout(function () {
                btn.removeClass('copied').find('i').removeClass('fa-check').addClass('fa-copy');
            }, 1500);
        });
    });

});
