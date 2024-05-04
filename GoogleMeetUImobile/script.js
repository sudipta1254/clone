/* Change background of icons on hover */
$('.mdi').on('mouseenter', function() {
    $(this).css('background', '#c4d8f3')
})
.on('mouseleave', function() {
    $(this).css('background', 'transparent')
})

/* Change style of icons on click */
$('.md-email').click(function() {
    $(this).removeClass('material-icons-outlined').addClass('material-icons')
    $('.md-chat').text('chat_bubble_outline')
    $('.md-video').addClass('material-icons-outlined').removeClass('material-icons')
})
$('.md-chat').click(function() {
    $('.md-email').addClass('material-icons-outlined').removeClass('material-icons')
    $(this).text('chat_bubble')
    $('.md-video').addClass('material-icons-outlined').removeClass('material-icons')
})
$('.md-video').click(function() {
    $('.md-email').addClass('material-icons-outlined').removeClass('material-icons')
    $('.md-chat').text('chat_bubble_outline')
    $(this).removeClass('material-icons-outlined').addClass('material-icons')
})

/* Fix the icon bar at the bottom of the page */
$('main').css('height', innerHeight - 55)
