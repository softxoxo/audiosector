$(document).ready(function() {
    $('.password_img').on('click', function() {
        const passwordInput = $('#password');
        if (passwordInput.attr('type') === 'password') {
            passwordInput.attr('type', 'text');
            toggleIcon.removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            passwordInput.attr('type', 'password');
            toggleIcon.removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });
    

    $('.log_in_item').on('mouseenter', function() {
        if (window.innerWidth > 1180) { // Check if the viewport width is greater than 1180px
            var $inner = $(this).find('.log_in_item--inner');
            $inner.removeClass('leave-rotation').addClass('start-rotation');
        }
        // var $inner = $(this).find('.log_in_item--inner');
        // $inner.removeClass('leave-rotation').addClass('start-rotation');
    });

    $('.log_in_item').on('mouseleave', function() {
        if (window.innerWidth > 1180) { // Check if the viewport width is greater than 1180px
            var $inner = $(this).find('.log_in_item--inner');
            $inner.removeClass('start-rotation').addClass('leave-rotation');
        }
    });
    
    $('input').attr('autocomplete', 'off');

    if($('select').length > 0){
        // nice select
        $('select').niceSelect();
    }


    $('.create #password').on('input', function() {
        var password = $(this).val();
        var strength = '';
        var strengthClass = '';

        // Check password strength
        if (password.length < 6) {
            strength = 'слабый пароль';
            strengthClass = 'weak';
        } else if (password.length < 12) {
            if (password.match(/[A-Z]/) || password.match(/[0-9]/)) {
                strength = 'средний пароль';
                strengthClass = 'medium';
            } else {
                strength = 'слабый пароль';
                strengthClass = 'weak';
            }
        } else {
            if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[\W_]/)) {
                strength = 'хороший пароль';
                strengthClass = 'good';
            } else {
                strength = 'средний пароль';
                strengthClass = 'medium';
            }
        }

        // Update the strength indicator
        // $('#strength').text('Сложность пароля: ' + strength).removeClass().addClass(strengthClass);
        $('#strength').html('Сложность пароля: <span class="' + strengthClass + '">' + strength + '</span>');

    });

    document.getElementById("password").addEventListener("focus", function() {
        this.setAttribute("autocomplete", "new-password");
    });

    $('.dropbtn').click(function() {
        $(this).next('.dropdown-content').toggle();
    });

    // Close the dropdown if the user clicks outside of it
    $(window).click(function(event) {
        if (!$(event.target).closest('.dropdown').length) {
            $('.dropdown-content').hide();
        }
    });
});

const dateSelectors = document.querySelectorAll('.date_day, .data_month, .date_year');
        const blobs = document.querySelectorAll('.blob0, .blob1, .blob2');
        for (let i = 0; i <= dateSelectors.length; i++) {
            const blob = blobs[i];
            const selector = dateSelectors[i];
            selector.onpointermove = event => {
                const rect = selector.getBoundingClientRect();
                const { clientX, clientY } = event;
                
                const x = clientX - rect.left;
                const y = clientY - rect.top;
                
                blob.style.opacity = '1';
                blob.animate({
                    left: `${x}px`,
                    top: `${y}px`
                }, {
                    duration: 3000,
                    fill: 'forwards'
                });
            }

            selector.onmouseleave = () => {
                blob.style.opacity = '0';
            }
        }

        document.body.onmousemove = (event) => {
            if (!event.target.closest('.date_day, .data_month, .date_year')) {
                blob.style.opacity = '0';
            }
        }