/* Change background of icons on hover */
/* $('.mdi').on('mouseenter', function() {
    $(this).css('background', '#c4d8f3')
})
.on('mouseleave', function() {
    $(this).css('background', 'transparent')
}) */

/* Change style of icons on click */
$('.md-email').click(function () {
    $('#div-email').show()
    $('#div-chat').hide()
    $('#div-meet').hide()
    $(this).removeClass('material-icons-outlined').addClass('material-icons').css('background', '#c4d8f3')
    $('.md-chat').text('chat_bubble_outline').css('background', 'transparent')
    $('.md-meet').addClass('material-icons-outlined').removeClass('material-icons').css('background', 'transparent')
})
$('.md-chat').click(function () {
    $('#div-email').hide()
    $('#div-chat').show()
    $('#div-meet').hide()
    $('.md-email').addClass('material-icons-outlined').removeClass('material-icons').css('background', 'transparent')
    $(this).text('chat_bubble').css('background', '#c4d8f3')
    $('.md-meet').addClass('material-icons-outlined').removeClass('material-icons').css('background', 'transparent')
})
$('.md-meet').click(function () {
    $('#div-email').hide()
    $('#div-chat').hide()
    $('#div-meet').show()
    $('.md-email').addClass('material-icons-outlined').removeClass('material-icons').css('background', 'transparent')
    $('.md-chat').text('chat_bubble_outline').css('background', 'transparent')
    $(this).removeClass('material-icons-outlined').addClass('material-icons').css('background', '#c4d8f3')
})


$('.chat-home').click(function () {
    $('#d1 span').css({
        'color': 'black',
        'background': 'transparent'
    })
    $(this).addClass('material-symbols-outlined').removeClass('material-symbols-sharp')
        .css({
            'color': '#00639c',
            'background': '#c3e7ff'
        })
    $('.chat-qna').addClass('material-icons-outlined').removeClass('material-icons')
    $('.chat-groups').addClass('material-icons-outlined').removeClass('material-icons')

    $('#chat-text').text('Home')
    $('.opt-dis').hide()
    $('.chat-opt1').show()
})
$('.chat-qna').click(function () {
    $('#d1 span').css({
        'color': 'black',
        'background': 'transparent'
    })
    $(this).addClass('material-icons').removeClass('material-icons-outlined')
        .css({
            'color': '#00639c',
            'background': '#c3e7ff'
        })
    $('.chat-home').addClass('material-symbols-sharp').removeClass('material-symbols-outlined')
    $('.chat-groups').addClass('material-icons-outlined').removeClass('material-icons')

    $('#chat-text').text('Direct messages')
    $('.chat-opt1, .chat-opt3, .chat-opt4').hide()
    $('.chat-opt2').show()
})
$('.chat-groups').click(function () {
    $('#d1 span').css({
        'color': 'black',
        'background': 'transparent'
    })
    $(this).addClass('material-icons').removeClass('material-icons-outlined')
        .css({
            'color': '#00639c',
            'background': '#c3e7ff'
        })
    $('.chat-home').addClass('material-symbols-sharp').removeClass('material-symbols-outlined')
    $('.chat-qna').addClass('material-icons-outlined').removeClass('material-icons')

    $('#chat-text').text('Spaces')
    $('.chat-opt1, .chat-opt2, .chat-opt4').hide()
    $('.chat-opt3').show()
})
$('.chat-more').click(function () {
    $('#d1 span').css({
        'color': 'black',
        'background': 'transparent'
    })
    $(this).css({
        'color': '#00639c',
        'background': '#c3e7ff'
    })
    $('.chat-home').addClass('material-symbols-sharp').removeClass('material-symbols-outlined')
    $('.chat-qna').addClass('material-icons-outlined').removeClass('material-icons')
    $('.chat-groups').addClass('material-icons-outlined').removeClass('material-icons')

    $('#chat-text').text('More')
    $('.chat-opt1, .chat-opt2, .chat-opt3').hide()
    $('.chat-opt4').show()
})


/* Fix the icon bar at the bottom of the page */
$('main').css('height', innerHeight - 55)
