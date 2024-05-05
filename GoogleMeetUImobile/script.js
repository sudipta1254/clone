/* Change background of icons on hover */
/* $('.mdi').on('mouseenter', function() {
    $(this).css('background', '#c4d8f3')
})
.on('mouseleave', function() {
    $(this).css('background', 'transparent')
}) */

/* Change style of icons on click */
$('.md-email').click(function () {
    $(this).removeClass('material-icons-outlined').addClass('material-icons').css('background', '#c4d8f3')
    $('.md-chat').text('chat_bubble_outline').css('background', 'transparent')
    $('.md-meet').addClass('material-icons-outlined').removeClass('material-icons').css('background', 'transparent')
})
$('.md-chat').click(function () {
    $('.md-email').addClass('material-icons-outlined').removeClass('material-icons').css('background', 'transparent')
    $(this).text('chat_bubble').css('background', '#c4d8f3')
    $('.md-meet').addClass('material-icons-outlined').removeClass('material-icons').css('background', 'transparent')
})
$('.md-meet').click(function () {
    $('.md-email').addClass('material-icons-outlined').removeClass('material-icons').css('background', 'transparent')
    $('.md-chat').text('chat_bubble_outline').css('background', 'transparent')
    $(this).removeClass('material-icons-outlined').addClass('material-icons').css('background', '#c4d8f3')
})

/* Fix the icon bar at the bottom of the page */
$('main').css('height', innerHeight - 55)
